import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../hooks/useGetPhotoCard'
import { Layout } from '../components/Layout'



export const Detail = () => {
    const params = useParams()
    return(
        <Layout title={`Photo ${params.detailId}`}>
            <PhotoCardWithQuery id={params.detailId} />
        </Layout>
        
    )
}