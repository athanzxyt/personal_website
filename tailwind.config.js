/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#e7e7e7', // Mercury
        'primary': '#1a1a1a',
        'secondary': '#06b178'
      },
    },
  },
  plugins: [],
}

