import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../hooks/useGetPhotoCard'


export const Detail = () => {
    const params = useParams()
    return(
        <PhotoCardWithQuery id={params.detailId} />
    )
}