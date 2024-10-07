import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./providers/theme";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter //basename="/reto-tecnico-dos-nelumbo"
        >
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
