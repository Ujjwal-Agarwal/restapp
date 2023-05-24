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
        'primary-custom':'#010e0b',
        'secondary-custom':'#f1fefa',
        'primary-button-custom':'#10b7e5',
        'secondary-button-custom':'#ffffff',
        'accent-custom':'#092c86',
      }
    },
    
  },
  plugins: [],
  corePlugins: {
    preflight: false,
},
}
