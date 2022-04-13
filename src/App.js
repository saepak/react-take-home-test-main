import React from "react";
import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// import app components
import Header from "./components/Header";
import Home from "./components/Home";
import Jobs from './components/postings/Job';
import theme from "./theme/mui";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />

      <Home />

      <Jobs />
    </ThemeProvider>
  );
}

export default App;
