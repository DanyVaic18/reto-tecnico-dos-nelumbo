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
import Menu from "./views/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  // basename="/reto-tecnico-dos-nelumbo"
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <HashRouter>
              <Navbar />
              <Menu />
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </HashRouter>
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
