/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#ffa06b',
        accent: '#ffd56b',
        background: '#f8f9fa',
        textColor: '#343a40',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'hero-pattern': "url('https://s3.ap-south-1.amazonaws.com/townscript-production/images/50404a36-1be4-4507-9be5-61aa7f5e3974.jpg')",
        'testimonial-pattern': "url('https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/65d550aaefda09001d0fb381.jpg')",
      },
    },
  },
  plugins: [],
};