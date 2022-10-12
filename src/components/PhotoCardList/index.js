import React from "react";
import { PhotoCard } from "../PhotoCard";
import { gql, useQuery } from "@apollo/client";
import { graphql } from "graphql";
import { useGetPhotos } from "../../hooks/useGetPhotos";

export const PhotoCardList = ({ categoryId }) => {
  const { loading, data, error } = useGetPhotos(categoryId);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
