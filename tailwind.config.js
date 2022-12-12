module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Inter',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    colors: {
      orange: {
        DEFAULT: '#FF9F66',
        100: '#FFF1E8',
        200: '#FFB081',
        hover: '#FF9454',
      },
      blue:{
        DEFAULT: '#779CAF',
        100: '#d7f0fc',
        200: '#7ccdf7',
        300: '#8eacbc', 
        hover: '#51C2FC',
      },
      green: {
        DEFAULT: '#258675',
        100: '#D4EEE9',
        200: '#94CAC0',
        300: '#45A090',
        400: '#adc2bf'
      },
      brown: {
        DEFAULT: '#d0b4ac',
        100: '#ebd5ce',
        200: '#ff987a',
        300: '#a15945'
      },
      yellow: '#EDC988',
      pink: {
        DEFAULT: '#FF7D6B',
        100: '#FFE9E4',
        200: '#FEAEA3',
      },
      heading: '#1C0A0A',
      paragraph: '#584F49',
      stroke: {
        1: '#B0B4C0',
        2: '#CFCFCF',
        3: '#F4F5F7',
      },
      section: '#F5F6F9',
      shape: '#E8EEF0',
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        circle: "url('/src/assets/img/hero/bg.png')",
        cardsBg: "url('/src/assets/img/cards/bg.png')",
        video: "url('/src/assets/img/video/video.png')",
        contact: "url('/src/assets/img/contact/bg.png')",
      },
      boxShadow: {
        primary: '0px 18px 36px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
