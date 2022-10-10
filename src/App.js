import React from 'react'
import { CategoriesList } from './components/CategoriesList'
import { Logo } from './components/Logo'
import { PhotoCardList } from './components/PhotoCardList'
import { GlobalStyle } from './styles/GlobalStyles'


export const App = () => (
  <>
  <GlobalStyle/>
  <Logo/>
  <CategoriesList/>
  <PhotoCardList/>
  </>
)
