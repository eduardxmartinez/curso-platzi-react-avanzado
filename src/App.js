import React, { useContext, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import { Detail } from "./pages/Detail";
import Favs from "./pages/Favs";
import { Home } from "./pages/Home";
import { NotRegistered } from "./pages/NotRegistered";
import User from "./pages/User";
import { GlobalStyle } from "./styles/GlobalStyles";



export const App = () => {
  const {isAuth} = useContext(AppContext)
  return (
    <>
      <Router>
      <GlobalStyle />
      <Logo />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pet/:id" element={<Home />} />
          <Route exact path="/detail/:detailId" element={<Detail />} />
          <Route exact path="/favorites" element={isAuth ? <Favs /> : <NotRegistered/>}/>
          <Route exact path="/user" element={isAuth ? <User /> : <NotRegistered/>}/>
        </Routes>
        <NavBar/>
      </Router>
    </>
  );
};