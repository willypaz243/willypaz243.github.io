// Scroll-triggered animations using Intersection Observer
(function () {
  // An element is "in view" if ANY part of it is visible in the viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0 && rect.left <= window.innerWidth && rect.right >= 0;
  }

  // Reveal a single element
  function reveal(el) {
    el.style.removeProperty('opacity');
    el.style.removeProperty('transform');
  }

  // Single fade-in elements
  const singleObs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          singleObs.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: '60px', threshold: 0.05 }
  );

  // Staggered container
  const containerObs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target);

          // Reveal children with stagger delay
          const children = Array.from(entry.target.children).filter(c => c.nodeType === Node.ELEMENT_NODE);
          children.forEach((child, i) => {
            child.style.removeProperty('opacity');
            child.style.removeProperty('transform');
          });

          containerObs.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: '60px', threshold: 0.05 }
  );

  // Initialize single fade-in elements — only observe those NOT in viewport on load
  document.querySelectorAll('[data-animate]').forEach(el => {
    if (!isInViewport(el)) {
      el.style.setProperty('opacity', '0');
      el.style.setProperty('transform', 'translateY(10px)');
      singleObs.observe(el);
    }
  });

  // Initialize staggered containers — only observe those NOT in viewport on load
  document.querySelectorAll('[data-animate-stagger]').forEach(el => {
    if (!isInViewport(el)) {
      el.style.setProperty('opacity', '0');
      el.style.setProperty('transform', 'translateY(10px)');

      // Also hide children
      const children = Array.from(el.children).filter(c => c.nodeType === Node.ELEMENT_NODE);
      children.forEach(child => {
        child.style.setProperty('opacity', '0');
        child.style.setProperty('transform', 'translateY(10px)');
      });

      containerObs.observe(el);
    }
    // If the container IS already visible on load, do nothing — children stay visible too
  });
})();
