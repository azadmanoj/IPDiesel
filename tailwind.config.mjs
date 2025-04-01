/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Include if using pages dir
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          lightest: '#4f5b95', // Lighter shade for gradients
          light: '#344082',    // Light accent
          DEFAULT: '#1f2969',  // Primary color you specified
          dark: '#171e4f',     // Darker shade
          darkest: '#10183a',  // Deepest shade for gradients
        },
        accent: {
          blue: '#3b82f6',    // Accent blue
          gold: '#fbbf24',    // Gold accent for highlights
          teal: '#0d9488',    // Teal accent for variety
        },
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        fadeInDown: {
          'from': { opacity: 0, transform: 'translateY(-20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInFromBottom: {
          'from': { opacity: 0, transform: 'translateY(50px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInFromLeft: {
          'from': { opacity: 0, transform: 'translateX(-50px)' },
          'to': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInFromRight: {
          'from': { opacity: 0, transform: 'translateX(50px)' },
          'to': { opacity: 1, transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-bottom': 'slideInFromBottom 0.7s ease-out forwards',
        'slide-in-left': 'slideInFromLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInFromRight 0.7s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 3s infinite',
        'bounce-slow': 'bounce-gentle 4s infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        'navy-gradient': 'linear-gradient(to right, #1f2969, #344082)',
        'navy-gradient-diagonal': 'linear-gradient(135deg, #1f2969, #344082)',
        'navy-gradient-deep': 'linear-gradient(to right, #10183a, #1f2969)',
        'navy-gradient-bright': 'linear-gradient(to right, #1f2969, #4f5b95)',
        'navy-radial': 'radial-gradient(circle at center, #344082, #1f2969)',
        'navy-to-dark': 'linear-gradient(to bottom, #1f2969, #10183a)',
        'navy-to-light': 'linear-gradient(to bottom, #1f2969, #4f5b95)',
        'navy-with-overlay': 'linear-gradient(to right, rgba(31,41,105,0.95), rgba(52,64,130,0.95))',
      },
      boxShadow: {
        'navy': '0 4px 14px 0 rgba(31, 41, 105, 0.25)',
        'navy-lg': '0 10px 25px -5px rgba(31, 41, 105, 0.3)',
        'navy-inner': 'inset 0 2px 4px 0 rgba(31, 41, 105, 0.15)',
        'glow': '0 0 15px rgba(59, 130, 246, 0.5)',
        'glow-navy': '0 0 20px rgba(31, 41, 105, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;