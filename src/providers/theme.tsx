import { createTheme } from "@mui/material/styles";
import { red, blue, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue.A700,
    },
    secondary: {
      main: yellow[600],
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        containedSecondary: {
          color: blue.A700,
          fontWeight:"700"
        },
      },
    },
  },
});

export default theme;
