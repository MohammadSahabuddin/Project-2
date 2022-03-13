import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'poppins',
  },
  palette: {
    text: {
      primary: '#000', //Default Text Color
    },
    background: {
      default: '#fff', //Default Background Color
    },
    primary: {
      main: '#08E8B3', //Others Main Color
      heroLight: '#FED332', //Yellow Color
      heroDark: '#0066FF', //navy blue color
      project: '#0066FF', //light blue Color
      codef: '#7027E1', //purple Color
      brand: '#FF0437', //red Color
    },
  },
  // breakpoints: {
  //   values: {
  //     xxs: 0, // Double Extra Small Device
  //     xs: 360, // Extra Small Device
  //     sm: 480, // Small Device
  //     msm: 576, // Medium Small Medium Device
  //     lsm: 640, // Large Small Medium Device
  //     smd: 768, // Small Medium Device
  //     md: 992, // Medium Device
  //     lg: 1200, // Large  Device
  //     xl: 1536, // Extra Large  Device
  //     xxl: 1980, // Double Extra Large  Device
  //   },
  // },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '30px 5%',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: 'poppins',
        },
      },
    },
  },
});
export default theme;
