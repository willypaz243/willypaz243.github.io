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
          'teal-strong': '#00A396', // TEAL_STRONG - Deep Miku (for colored text in light mode)
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
        'miku-light': '0 4px 12px rgba(57, 197, 187, 0.2)',
        'miku-neon': '0 0 15px rgba(72, 255, 244, 0.7)',
        'miku-magenta': '0 0 15px rgba(255, 0, 128, 0.5)',
        'glow-cyan': '0 0 24px rgba(69, 230, 217, 0.35)',
      },
      minHeight: {
        // NERV terminal frame (hero)
        terminal: '380px',
        'terminal-lg': '490px',
      },
      borderRadius: {
        miku: '15px',
      },
      spacing: {
        // Fixed nav height (replaces arbitrary pt-[70px] / h-[70px])
        'nav-h': '70px',
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
    function ({ addUtilities }) {
      addUtilities({
        // Chamfered corners — the EVA signature shape (replaces rounded-* in Phase 1+)
        '.clip-chamfer': {
          clipPath:
            'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)',
        },
        '.clip-chamfer-sm': {
          clipPath:
            'polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px)',
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
      });
    },
  ],
};
