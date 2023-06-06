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
      colors:{
        'primary-custom':'#000000',
        'secondary-custom':'#F8F8F7',
        'primary-button-custom':'#FFCA40',
        'secondary-button-custom':'#C8161D',
        'accent-custom':'#808080',
      }
    },
    
  },
  plugins: [],
  corePlugins: {
    preflight: false,
},
}
