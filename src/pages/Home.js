import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesList } from "../components/CategoriesList";
import { PhotoCardList } from "../components/PhotoCardList";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const params = useParams();
  return (
    <Fragment>
      <Helmet>
        <title>Petgram | The Pet Photo App</title>
      </Helmet>
      <CategoriesList />
      <PhotoCardList categoryId={params.id} />
    </Fragment>
  );
};

const Home = React.memo(HomePage)

export default Home
