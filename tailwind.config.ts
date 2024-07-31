import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'var(--font-jetbrains-mono)',
    },
    extend: {
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99', // デフォルトカラー
          hover: '#00e187', // ホバーカラー
        },
      },
      // ハンバーガーメニューのアニメーション
      keyframes: {
        // アコーディオンの閉時のアニメーション
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        // アコーディオンの開時のアニメーション
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      // アニメーション
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
