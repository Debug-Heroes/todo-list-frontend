/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'tasks-grid-sm': 'repeat(3, calc(100% - (2rem * 2) - 40px))',
        'tasks-grid-md': 'repeat(3, calc((100% - (2rem * 2))/3))',

      },
     colors: {
      "dh-gray-300": '#BEC1CC'
     }
    },
  },
  plugins: [
    
  ],
}

