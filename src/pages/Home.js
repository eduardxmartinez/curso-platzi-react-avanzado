import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesList } from "../components/CategoriesList";
import { PhotoCardList } from "../components/PhotoCardList";
export const Home = () => {

  let params = useParams();
  return (
    <Fragment>
      <CategoriesList />
      <PhotoCardList categoryId={params.id} />
    </Fragment>
  );
};
