import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red.A400
    },
    secondary: {
      main: red.A400
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeight: 600,
    fontWeightLightMedium: 700
  }
});

export default theme;
