import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: '#25274D'
    },
    primary: {
      main: '#F78888'
    },
    secondary: {
      main: '#F3D250'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 1000
  }
});

export default theme;
