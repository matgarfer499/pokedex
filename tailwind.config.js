/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        egg: '50% 50% 50% 50% / 60% 60% 40% 40%',
      },
    },
  },
  plugins: [],
}

