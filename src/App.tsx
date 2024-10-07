import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./providers/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
