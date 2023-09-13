import React from 'react'
import { FavsWithQuery } from '../hooks/useGetFavs'
import { Layout } from '../components/Layout'

const Favs = () => {
  
  return (
    <>
      <Layout title="Favorites" subtitle="Your favorite posts"></Layout>
      <FavsWithQuery/>
    </>
  )
}

export default Favs