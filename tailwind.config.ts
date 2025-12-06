import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: '#f0f3f7',
          100: '#d9e0eb',
          200: '#b3c1d7',
          300: '#8da2c3',
          400: '#6783af',
          500: '#1a2a4a',
          600: '#162340',
          700: '#121c34',
          800: '#0e1528',
          900: '#0a0e1c',
          DEFAULT: '#1a2a4a',
        },
        gold: {
          50: '#fefbf3',
          100: '#fdf4dc',
          200: '#fbe9b9',
          300: '#f9de96',
          400: '#f7d373',
          500: '#d4af37',
          600: '#b8962f',
          700: '#9c7d27',
          800: '#80641f',
          900: '#644b17',
          DEFAULT: '#d4af37',
        },
        cream: {
          50: '#fefefe',
          100: '#fcfcfa',
          200: '#f9f8f4',
          300: '#f5f3ed',
          400: '#ebe8df',
          500: '#e1ddd1',
          DEFAULT: '#f9f8f4',
        },
        charcoal: {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#333333',
          600: '#2a2a2a',
          700: '#222222',
          800: '#1a1a1a',
          900: '#111111',
          DEFAULT: '#333333',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl')
  ],
};

export default config;