import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProvider } from './context/AppContext';
const client = new ApolloClient({
    uri: "https://petgram-server-eduardx.vercel.app/graphql",
    cache: new InMemoryCache(),
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
