import flowbitePlugin from 'flowbite/plugin';
import daisyui from "daisyui";

export default {
  content: ['./src/**/*.{html,js,ts,tsx,jsx,md,mdx,csv,csvx,tsv,tsvx,json,json5}'],
  theme: {
    extend: {
      objectPosition: {
        'center-right': 'center right',
      },
      fontFamily: {
        'chillax': ['chillax'],
        'satoshi': ['satoshi'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'Nunito': ['Nunito'],
      },
      height: {
        '80vh': '80vh',
        '90vh': '90vh',
      },
      borderRadius: {
        '40px': '40px',
      },
      top: {
        '40%': '45%',
      },
      color: {
        '#2E4F4F': '#2E4F4F'
      },
      keyframes: {
        fadeInSequence: {
          '0%' : { opacity: '0' },
          '50%' : { opacity: '0.5' },
          '100%' : { opacity: '1' },
        },
      },
      animation: {
        fadeInSequence: 'fadeInSequence 2s ease-in-out',
      },
    },
  },
  plugins: [
    flowbitePlugin,
    daisyui,
    addDynamicIconSelectors(), // Assuming addDynamicIconSelectors is defined elsewhere
  ],
};
