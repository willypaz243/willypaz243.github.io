// Signature motion — "NERV Terminal" (Phase 3)
// 1. Lock-on reveal: elements start out of focus (pulled back + blurred) and
//    settle into place like a targeting reticle locking on its target.
// 2. Section scan sweep: one-shot scanline pass over each [data-scan] section
//    when it enters the viewport (.scan-on triggers CSS in index.astro).
// 3. Magnetic CTAs: [data-magnetic] buttons follow the cursor slightly.
// Everything is skipped under prefers-reduced-motion (content stays visible).
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  // An element is "in view" if ANY part of it is visible in the viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0 &&
      rect.left <= window.innerWidth &&
      rect.right >= 0
    );
  }

  // --- Lock-on reveal (Web Animations API) --------------------------------
  const LOCK = {
    duration: 700,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    stagger: 90,
    from: { opacity: 0, transform: 'scale(1.03) translateY(8px)', filter: 'blur(8px)' },
    to: { opacity: 1, transform: 'scale(1) translateY(0)', filter: 'blur(0px)' },
  };

  function hideForLock(el) {
    el.style.opacity = '0';
    el.style.transform = 'scale(1.03) translateY(8px)';
    el.style.filter = 'blur(8px)';
  }

  function lockOn(el, delay = 0) {
    // fill:'backwards' holds the "from" state during any delay; when the
    // animation ends the element simply returns to its natural (visible)
    // state, so no inline cleanup beyond removing the hidden styles.
    el.animate([LOCK.from, LOCK.to], {
      duration: LOCK.duration,
      delay,
      easing: LOCK.easing,
      fill: 'backwards',
    });
    el.style.removeProperty('opacity');
    el.style.removeProperty('transform');
    el.style.removeProperty('filter');
    // One-shot CSS accents keyed off reveal (e.g. reticle sweep on plates)
    el.classList.add('is-locked');
  }

  // Single elements
  const singleObs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          lockOn(entry.target);
          singleObs.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: '60px', threshold: 0.05 }
  );

  // Staggered containers (children revealed one by one)
  const containerObs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = Array.from(entry.target.children).filter(
            c => c.nodeType === Node.ELEMENT_NODE
          );
          children.forEach((child, i) => lockOn(child, i * LOCK.stagger));
          containerObs.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: '60px', threshold: 0.05 }
  );

  // Initialize — only observe elements NOT already in the viewport on load
  document.querySelectorAll('[data-animate]').forEach(el => {
    if (!isInViewport(el)) {
      hideForLock(el);
      singleObs.observe(el);
    }
  });

  document.querySelectorAll('[data-animate-stagger]').forEach(el => {
    if (!isInViewport(el)) {
      const children = Array.from(el.children).filter(c => c.nodeType === Node.ELEMENT_NODE);
      children.forEach(hideForLock);
      containerObs.observe(el);
    }
  });

  // --- Section scanline sweep ---------------------------------------------
  const scanObs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scan-on');
          scanObs.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: '60px', threshold: 0.02 }
  );
  document.querySelectorAll('[data-scan]').forEach(el => scanObs.observe(el));

  // --- Magnetic CTAs (fine pointers only) ----------------------------------
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const STRENGTH_X = 0.22;
  const STRENGTH_Y = 0.3;
  const EASE = 0.18;

  document.querySelectorAll('[data-magnetic]').forEach(btn => {
    let raf = null;
    let base = null; // rest position, captured on enter (avoids feedback)
    let tx = 0, ty = 0, cx = 0, cy = 0;

    function frame() {
      cx += (tx - cx) * EASE;
      cy += (ty - cy) * EASE;
      btn.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      const settled = Math.abs(tx - cx) < 0.15 && Math.abs(ty - cy) < 0.15;
      if (settled) {
        if (tx === 0 && ty === 0) {
          btn.style.removeProperty('transform');
          btn.style.removeProperty('transition-property');
        }
        raf = null;
        return;
      }
      raf = requestAnimationFrame(frame);
    }

    function kick() {
      if (!raf) raf = requestAnimationFrame(frame);
    }

    btn.addEventListener('pointerenter', () => {
      const r = btn.getBoundingClientRect();
      base = { x: r.left, y: r.top, w: r.width, h: r.height };
      // Keep color transitions but stop CSS from easing the per-frame
      // transform (buttons carry transition-all / transition-colors).
      btn.style.transitionProperty = 'background-color, border-color, color, box-shadow';
      kick();
    });
    btn.addEventListener('pointermove', e => {
      if (!base) return;
      tx = (e.clientX - (base.x + base.w / 2)) * STRENGTH_X;
      ty = (e.clientY - (base.y + base.h / 2)) * STRENGTH_Y;
      kick();
    });
    btn.addEventListener('pointerleave', () => {
      base = null;
      tx = 0;
      ty = 0;
      kick(); // spring back to rest, then clears the inline transform
    });
  });
})();
