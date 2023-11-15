import React, { useContext, Suspense } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import { GlobalStyle } from "./styles/GlobalStyles";

const Favs = React.lazy(()=> import('./pages/Favs'))
const Home = React.lazy(()=> import('./pages/Home'))
const Detail = React.lazy(()=> import('./pages/Detail'))
const User = React.lazy(()=> import('./pages/User'))
const NotRegistered = React.lazy(()=> import('./pages/NotRegistered'))
const NotFound = React.lazy(()=> import('./pages/NotFound'))

export const App = () => {
  const {isAuth} = useContext(AppContext)
  return (
    <Suspense fallback={<div/>}>
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
    </Suspense>
  );
};