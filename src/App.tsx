import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./providers/theme";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter //basename="/reto-tecnico-dos-nelumbo"
        >
          <Routes>
            <Route
              index
              path="/"
              element={
                <>
                  <h1>Pagina principal</h1>
                </>
              }
            />
            <Route
              path="/dos"
              element={
                <>
                  <h2>HOLA MUNDO</h2>
                </>
              }
            />
            <Route path="/*" element={<h2>Pagina no encontrada</h2>} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
