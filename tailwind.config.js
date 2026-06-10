/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        merah: '#CE1126',
        'merah-tua': '#7A0C18',
        gelap: '#14080A',
        emas: '#D4A017',
        'emas-terang': '#E9C46A',
        putih: '#FFFFFF',
        krem: '#FBF7F0',
        'teks-gelap': '#1A1A1A',
        'teks-terang': '#FBF7F0',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'merah-gelap': 'linear-gradient(160deg, #CE1126 0%, #7A0C18 45%, #14080A 100%)',
        'gelap-merah': 'linear-gradient(180deg, #14080A 0%, #7A0C18 100%)',
        'emas-shine': 'linear-gradient(90deg, #D4A017 0%, #E9C46A 50%, #D4A017 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.35)',
        'emas-glow': '0 0 24px rgba(212, 160, 23, 0.45)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'bob-down': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.7' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        'bob-down': 'bob-down 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
