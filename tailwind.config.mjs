/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#18110D',
          900: '#18110D',
          800: '#1D1410',
          700: '#2A1D16',
        },
        neon: '#D56B1A',
        gold: '#FFCE75',
        bronze: '#B28250',
        ochre: '#C4A57B',
        beige: '#D9C7B0',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        menu: '28rem',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-gold': {
          textShadow:
            '0 0 14px rgba(255, 206, 117, 0.45), 0 0 28px rgba(213, 107, 26, 0.25), 0 2px 6px rgba(0, 0, 0, 0.8)',
        },
        '.text-shadow-bronze': {
          textShadow:
            '0 1px 2px rgba(0, 0, 0, 0.75), 0 0 10px rgba(178, 130, 80, 0.28)',
        },
        '.text-shadow-neon': {
          textShadow:
            '0 0 10px rgba(213, 107, 26, 0.65), 0 0 22px rgba(213, 107, 26, 0.35)',
        },
        '.shadow-glow-neon': {
          boxShadow:
            '0 0 8px rgba(213, 107, 26, 0.55), 0 0 24px rgba(213, 107, 26, 0.22), inset 0 0 0 1px rgba(213, 107, 26, 0.45)',
        },
        '.shadow-glow-subtle': {
          boxShadow:
            '0 0 16px rgba(213, 107, 26, 0.1), 0 10px 28px rgba(0, 0, 0, 0.45)',
        },
        '.shadow-placeholder': {
          boxShadow:
            '0 0 18px rgba(213, 107, 26, 0.12), inset 0 0 12px rgba(0, 0, 0, 0.35)',
        },
      });
    },
  ],
};
