import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { AppProvider } from './context/AppContext';
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: "https://petgram-server-eduardx.vercel.app/graphql",
})

const authLink = setContext((_, { headers }) => {
    const token = window.sessionStorage.getItem("token")
    return {
        headers: {
            ...headers,
        authorization: token ? `Bearer ${token}` : "",
        },
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    onError: error => {
        const { networkError} = error
        if (networkError && networkError.result.code === 'invalid_token ') {
            window.sessionStorage.removeItem('token')
            window.location.href = "/"
        }
     }
})


const container = document.getElementById('app')
const root = createRoot(container)
root.render(
    <AppProvider>
    <ApolloProvider client={client}>
        <App tab='home' />
    </ApolloProvider>
    </AppProvider>
)
