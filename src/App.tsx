import React from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import theme from "./providers/theme";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Navbar from "./layout/Navbar";

function App() {
  // basename="/reto-tecnico-dos-nelumbo"
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <HashRouter>
            <Navbar />
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
