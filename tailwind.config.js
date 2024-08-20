/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens: {
      xs: '375',
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
    },
    container: {
      center: true,
      screens: {
        xs: '302px',
        sm: '462px',
        md: '608px',
        lg: '90%',
        xl: '90%',
        '2xl': '90%',
        '3xl': '1396px',
      },
    },

    // colors: {
    //   primary: '#000',
    //   secondary: '#111',
    // },

    extend: {
      colors: {
        primary: '#000',
        secondary: '#111',
      },
      fontSize: {
        sm: {
          base: '16px',
          sm: '18px',
          md: '20px',
          lg: '22px',
          xl: '24px',
          '2xl': '26px',
          '3xl': '2rem',
        },
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['*'],
//   theme: {
//     extend: {},

//     screens: {
//       xs: { max: '480px' },
//       sm: { min: '481px', max: '767px' },
//       md: { min: '768px', max: '979px' },
//       lg: { min: '980px', max: '1024px' },
//       xl: { min: '1025px', max: '1180px' },
//       '2xl': { min: '1181px', max: '1399px' },
//       '3xl': { min: '1400px' },
//     },
//     container: {
//       center: true,
//       screens: {
//         xs: '302px',
//         sm: '462px',
//         md: '608px',
//         lg: '90%',
//         xl: '90%',
//         '2xl': '90%',
//         '3xl': '1396px',
//       },
//     },

//     colors: {
//       primary: '#7B9645',
//       secondary: '#53514D',
//       light: '#fff',
//       dark: '#201818',
//     },

//     fontFamily: {
//       altivo: ['altivo', 'sans-serif'],
//       bai: ['bai-jamjuree', 'serif'],
//     },

//     plugins: [],
//   },
// };
