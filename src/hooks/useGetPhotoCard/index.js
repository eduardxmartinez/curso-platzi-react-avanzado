import { useQuery } from "@apollo/client";
import React from "react";
import { PhotoCard } from "../../components/PhotoCard";
import { GET_SINGLE_PHOTO } from "../../queries/GET_SINGLE_PHOTO";

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id: id,
    },
  });

  if (error) return <h2>Internal Server Error</h2>;
  if (loading) return <h2>Loading...</h2>;
  return <PhotoCard {...data.photo} />;
};
