import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_FAVS } from "../../queries/GET_FAVS";
import { ListOfFavs } from '../../components/ListOfFavs';

export const FavsWithQuery = () => {
    const { loading, data, error } = useQuery(GET_FAVS, {
        fetchPolicy: 'cache-and-network'})
        if (loading) return <p>loading...</p>
        if (error) return <p>Error!</p>
        const {favs} = data
        return <ListOfFavs favs={favs}/>
}

