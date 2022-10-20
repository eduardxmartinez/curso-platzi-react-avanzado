import { useQuery } from "@apollo/client"
import { GET_PHOTOS } from "../../queries/GET_PHOTOS"

export const useGetPhotos = categoryId => {
    const { loading, data, error } = useQuery(GET_PHOTOS, { variables: { categoryId: categoryId} })
    return {loading, data, error}
}