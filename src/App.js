import React, { Fragment } from "react";
import { CategoriesList } from "./components/CategoriesList";
import { Logo } from "./components/Logo";
import { PhotoCardList } from "./components/PhotoCardList";
import { PhotoCardWithQuery } from "./hooks/useGetPhotoCard";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId 
      ? (<PhotoCardWithQuery id={detailId} />)
      : (
        <Fragment>
          <CategoriesList />
          <PhotoCardList categoryId={2} />
        </Fragment>
      )}
    </>
  );
};
