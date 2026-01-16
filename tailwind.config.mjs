/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1a1a1a',
          dark: '#ffffff',
        },
        secondary: {
          light: '#4a4a4a',
          dark: '#a1a1aa',
        },
        background: {
          light: '#ffffff',
          dark: '#111827',
        },
        accent: {
          blue: {
            light: '#3B82F6',
            dark: '#60A5FA',
          },
          purple: {
            light: '#8B5CF6',
            dark: '#A78BFA',
          },
          green: {
            light: '#10B981',
            dark: '#34D399',
          },
          orange: {
            light: '#F59E0B',
            dark: '#FBBF24',
          },
        },
        card: {
          light: '#f9fafb',
          dark: '#1f2937',
        },
      },
      boxShadow: {
        skill: '0 2px 4px rgba(0,0,0,0.05)',
        card: '0 4px 6px rgba(0,0,0,0.1)',
        hover: '0 8px 12px rgba(0,0,0,0.1)',
        focus: '0 0 0 3px rgba(59, 130, 246, 0.3)',
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
  plugins: [],
};
