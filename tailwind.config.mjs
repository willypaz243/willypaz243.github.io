/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Miku Design System Colors - Centralized Configuration
        // Based on MIKU_COLORS.md v3.0

        // Brand Core Colors (Constant in both themes)
        miku: {
          // Brand Colors
          cyan: '#39C5BB', // MIKU_CYAN - The signature color
          glow: '#48FFF4', // MIKU_GLOW - Electric cyan
          magenta: '#FF0080', // MAGENTA_POP - Complementary accent
          violet: '#7B61FF', // TECH_VIOLET - Tertiary accent

          // Light Mode Colors (MikuLight)
          base: '#FAFCFF', // BG_BASE - Ice White
          surface: '#E8F1F5', // BG_SURFACE - Miku Mist
          'teal-strong': '#007A70', // TEAL_STRONG - Deep Miku (light-mode text; AA 5.1:1 on base)
          'text-main': '#1B2631', // TXT_MAIN - Midnight Blue
          'text-dim': '#546E7A', // TXT_DIM - Cool Gray
          'border-dim': '#B0BEC5', // BORDER_DIM - With 30% opacity

          // Dark Mode Colors (MikuDark)
          'dark-base': '#0F1419', // BG_BASE - Black with deep blue tint
          'dark-surface': '#161B22', // BG_SURFACE - For cards, sidebars
          'dark-border': '#21262D', // BORDER_DIM - Subtle, barely visible
          'dark-text': '#F0F6FC', // TXT_MAIN - White with blue tint
          'dark-dim': '#8B949E', // TXT_DIM - Medium gray

          // Functional Colors (State semantics)
          success: '#00E676', // FUNC_SUCCESS - Neon Green (dark mode)
          warning: '#FFD700', // FUNC_WARNING - Cyber Gold (dark mode)
          error: '#FF2E63', // FUNC_ERROR - Neon Red (dark mode)
          info: '#29B6F6', // FUNC_INFO - Holo Blue (dark mode)
        },
      },
      boxShadow: {
        'miku-dark': '0 0 10px rgba(57, 197, 187, 0.5)',
        'miku-light': '0 4px 12px rgba(57, 197, 187, 0.12)',
        'miku-neon': '0 0 15px rgba(72, 255, 244, 0.7)',
        'miku-magenta': '0 0 15px rgba(255, 0, 128, 0.5)',
        'glow-cyan': '0 0 24px rgba(69, 230, 217, 0.35)',
      },
      minHeight: {
        // NERV terminal frame (hero)
        terminal: '380px',
        'terminal-lg': '600px',
      },
      borderRadius: {
        miku: '15px',
      },
      spacing: {
        // Fixed nav height (replaces arbitrary pt-[70px] / h-[70px])
        'nav-h': '70px',
        // Nav height incl. its 1px bottom border: body offset and anchor offsets
        'nav-offset': '71px',
        // Nav controls: 44px touch target on mobile, 36px on desktop
        'nav-ctl-sm': '44px',
        'nav-ctl': '36px',
        // Floating mobile bar: 44px item + padding + 16px offset, plus the home indicator
        // pb-nav-bar reserves its height; bottom-nav-bar-inset positions the bar itself
        'nav-bar': 'calc(76px + env(safe-area-inset-bottom, 0px))',
        'nav-bar-inset': 'calc(1rem + env(safe-area-inset-bottom, 0px))',
      },
      scrollMargin: {
        // Nav height incl. its 1px bottom border — single source for anchor offsets
        nav: '71px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    // NERV/EVA-style design primitives (see .plan/eva-redesign-plan.md)
    function ({ addUtilities, addComponents }) {
      addUtilities({
        // Chamfered corners — the EVA signature shape (replaces rounded-* in Phase 1+)
        '.clip-chamfer': {
          clipPath: 'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)',
        },
        '.clip-chamfer-sm': {
          clipPath: 'polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px)',
        },
        // Hazard warning stripes — color via --hazard-color (defaults to miku.warning gold)
        '.bg-hazard-stripe': {
          backgroundImage:
            'repeating-linear-gradient(-45deg, var(--hazard-color, #FFD700) 0, var(--hazard-color, #FFD700) 10px, transparent 10px, transparent 20px)',
        },
        // Subtle HUD scanline overlay
        '.scanlines': {
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(72, 255, 244, 0.04) 0, rgba(72, 255, 244, 0.04) 1px, transparent 1px, transparent 3px)',
        },
        // Faint HUD grid for dossier cards
        '.hud-grid': {
          backgroundImage:
            'linear-gradient(rgba(72, 255, 244, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(72, 255, 244, 0.03) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        },
        // Icon glow (nav toggles) — replaces inline drop-shadow styles
        '.glow-cyan': { filter: 'drop-shadow(0 0 8px rgba(57, 197, 187, 0.6))' },
        '.glow-cyan-strong': { filter: 'drop-shadow(0 0 10px rgba(57, 197, 187, 0.8))' },
        '.glow-teal': { filter: 'drop-shadow(0 2px 6px rgba(0, 163, 150, 0.4))' },
        // --- Chamfer rim system (pairs with .chamfer-rim; theme values live in
        // Layout.astro as --rim-*/--fill-* vars). The build minifier mangles nested
        // `.dark &` inside pseudo-classes, so every rule here is a flat selector.
        '.rim-nav': { '--rim': 'var(--rim-nav)' },
        '.rim-plate': { '--rim': 'var(--rim-plate)' },
        '.rim-card': { '--rim': 'var(--rim-card)' },
        '.rim-cyan': { '--rim': 'var(--rim-cyan)' },
        '.rim-cta': { '--rim': 'var(--rim-cta)' },
        '.rim-hero': { '--rim': 'var(--rim-hero)' },
        // Hover rims (set --rim-hover; .chamfer-rim swaps gradients on :hover/:focus-visible)
        '.rim-hover-cyan': {
          '--rim-hover': 'color-mix(in srgb, var(--miku-cyan) 50%, transparent)',
        },
        '.rim-hover-cyan-full': { '--rim-hover': 'var(--miku-cyan)' },
        '.rim-hover-teal-glow': {
          '--rim-hover': 'var(--miku-teal-strong)',
          '.dark &': { '--rim-hover': 'var(--miku-glow)' },
        },
        '.rim-hover-teal-60-cyan-50': {
          '--rim-hover': 'color-mix(in srgb, var(--miku-teal-strong) 60%, transparent)',
          '.dark &': { '--rim-hover': 'color-mix(in srgb, var(--miku-cyan) 50%, transparent)' },
        },
        '.rim-hover-teal70-magenta60': {
          '--rim-hover': 'color-mix(in srgb, var(--miku-teal-strong) 70%, transparent)',
          '.dark &': { '--rim-hover': 'color-mix(in srgb, var(--miku-magenta) 60%, transparent)' },
        },
        '.group:hover .rim-hover-cyan-40-group': {
          '--rim-hover': 'color-mix(in srgb, var(--miku-cyan) 40%, transparent)',
        },
        // Fills (replace bg-* on rimmed elements; the ::before paints them inside the ring)
        '.fill-surface-80': { '--fill': 'var(--fill-surface-80)' },
        '.fill-surface-60-40': { '--fill': 'var(--fill-surface-60-40)' },
        '.fill-surface-solid': { '--fill': 'var(--fill-surface-solid)' },
        '.fill-base': { '--fill': 'var(--fill-base)' },
        '.fill-base-surface': { '--fill': 'var(--fill-base-surface)' },
        '.fill-cyan-10-15': { '--fill': 'var(--fill-cyan-10-15)' },
        // Hover fills (replace hover:bg-*)
        '.fill-hover-cyan-10': {
          '--fill-hover': 'color-mix(in srgb, var(--miku-cyan) 10%, transparent)',
        },
        '.fill-hover-cyan-10-20': {
          '--fill-hover': 'color-mix(in srgb, var(--miku-cyan) 10%, transparent)',
          '.dark &': { '--fill-hover': 'color-mix(in srgb, var(--miku-cyan) 20%, transparent)' },
        },
        '.fill-hover-cyan-20': {
          '--fill-hover': 'color-mix(in srgb, var(--miku-cyan) 20%, transparent)',
        },
        // Shape-following shadow for rimmed elements: box-shadow is clipped away by
        // clip-path, so the light goes on the parent as a drop-shadow of the shape.
        // Kept at low alpha: a slight halo, not a neon bloom.
        '.shape-shadow': { filter: 'drop-shadow(0 4px 12px rgba(57, 197, 187, 0.12))' },
        '.shape-shadow-glow': { filter: 'drop-shadow(0 0 18px rgba(69, 230, 217, 0.14))' },
        '.shape-shadow-glow-dark': { '.dark &': { filter: 'drop-shadow(0 0 18px rgba(69, 230, 217, 0.14))' } },
        // Wrapper of each project card: glows only the hovered card (its own drop-shadow,
        // following the chamfered shape). box-shadow on the card itself is clipped away.
        '.shape-shadow-glow-hover': {
          transitionProperty: 'filter',
          transitionDuration: '300ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.shape-shadow-glow-hover:has(.group:hover)': {
          filter: 'drop-shadow(0 0 16px rgba(69, 230, 217, 0.18))',
        },
      });
      addComponents({
        // Chamfered rim: a 1px border that follows the diagonal cut.
        // The element paints the rim color across the whole chamfered box; a ::before
        // inset 1px paints the fill, so the only visible rim paint is the 1px ring
        // (clip-path alone clips the border away on the diagonal, T16).
        // Fill and rim colors arrive through --rim / --fill (utilities below).
        '.chamfer-rim': {
          position: 'relative',
          backgroundColor: 'transparent',
          backgroundImage: 'linear-gradient(var(--rim, transparent))',
          clipPath: 'polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px)',
          // Hover swaps in --rim-hover/--fill-hover (set by the rim-hover-*/fill-hover-* utilities);
          // they fall back to the base vars when absent.
          '&:hover, &:focus-visible': {
            backgroundImage: 'linear-gradient(var(--rim-hover, var(--rim, transparent)))',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '1px',
            zIndex: '-1',
            backgroundImage: 'linear-gradient(var(--fill, transparent))',
            clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
          },
          '&:hover::before, &:focus-visible::before': {
            backgroundImage: 'linear-gradient(var(--fill-hover, var(--fill, transparent)))',
          },
        },
        '.chamfer-rim-lg': {
          clipPath: 'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)',
          '&::before': {
            clipPath: 'polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px)',
          },
        },
        // Shared nav control: chamfered shape + 44px touch target / 36px desktop + surface.
        // Colors come from the miku tokens; components override with utilities (utility layer wins)
        '.nav-control': {
          '@apply inline-flex items-center justify-center gap-1.5 min-h-nav-ctl-sm md:min-h-nav-ctl min-w-nav-ctl-sm md:min-w-nav-ctl px-3 text-sm font-medium leading-none select-none':
            {},
          transitionProperty: 'color, background-color, --rim, --fill',
          transitionDuration: '300ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
      });
    },
  ],
};
