import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/Navbar";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {

  return (
    <>
      <Router>
      <GlobalStyle />
      <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </Router>
      <NavBar/>
    </>
  );
};
