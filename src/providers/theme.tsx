import { createTheme } from '@mui/material/styles';
import { red, blue, yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue.A700,
    },
    secondary: {
      main: yellow.A200,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
