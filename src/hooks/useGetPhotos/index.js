import { gql, useQuery } from "@apollo/client"

const getPhotos = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export const useGetPhotos = categoryId => {
    const { loading, data, error } = useQuery(getPhotos, { variables: { categoryId: categoryId} })
    return {loading, data, error}
}