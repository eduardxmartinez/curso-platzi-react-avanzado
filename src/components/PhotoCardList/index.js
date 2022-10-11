import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql, useQuery } from '@apollo/client'
import { graphql } from 'graphql'

const withPhotos = gql`
query getPhotos{
    photos{
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }  
`

export const PhotoCardList = () => {
    const { loading, error, data } = useQuery(withPhotos);
  
    if (error) {
      return <h2>Internal Server Error</h2>;
    }
    if (loading) {
      return <h2>Loading...</h2>;
    }
    console.log(data)
    return (
      <ul>
        {data.photos.map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))}
      </ul>
    );
  };