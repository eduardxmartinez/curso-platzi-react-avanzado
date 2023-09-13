import React, { useContext } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import { Detail } from "./pages/Detail";
import Favs from "./pages/Favs";
import { Home } from "./pages/Home";
import { NotRegistered } from "./pages/NotRegistered";
import User from "./pages/User";
import { GlobalStyle } from "./styles/GlobalStyles";
import NotFound from "./pages/NotFound";

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
          <Route exact path="/favorites" element={isAuth ? <Favs /> : <Navigate replace to='/login' />}/>
          <Route exact path="/user" element={isAuth ? <User /> : <Navigate replace to='/login' />}/>
          <Route exact path='/login' element={!isAuth ? <NotRegistered/> : <Navigate replace to='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavBar/>
      </Router>
    </>
  );
};