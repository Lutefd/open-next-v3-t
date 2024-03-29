/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-exo2)'],
        nunito: ['var(--font-nunito)'],
      },
      boxShadow: {
        custom: 'box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.20)',
      },
      colors: {
        primary: '#3FA110',
        'primary-darker': '#33820D',
        'primary-brighter': '#64C832',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
