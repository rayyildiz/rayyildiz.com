import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764'
        },
        surface: {
          light: '#fafafa',
          DEFAULT: '#f5f5f5'
        }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.primary.600'),
            '--tw-prose-headings': theme('colors.slate.900'),
            'a': {
              color: theme('colors.primary.600'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.primary.700'),
                textDecoration: 'underline'
              }
            },
            'code': {
              backgroundColor: theme('colors.slate.100'),
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '400'
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' }
          }
        }
      })
    }
  },
  plugins: [typography]
};
