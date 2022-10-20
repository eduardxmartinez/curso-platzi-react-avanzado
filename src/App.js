import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./hooks/useGetPhotoCard";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
    <Router>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pet/:id" element={<Home/>} />
          </Routes>
        
      )}
      </Router>
    </>
  );
};
