/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'background': '#e7e7e7', // Mercury
        // 'background': '#ffffff', // Cultured
        'primary': '#1a1a1a',
        'secondary': '#06b178'
      },
      lineHeight: {
        'tight': '0.8'
      }
    },
  },
  plugins: [],
}

