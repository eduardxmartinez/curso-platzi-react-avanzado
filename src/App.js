import React from 'react'
import { CategoriesList } from './components/CategoriesList'
import { PhotoCardList } from './components/PhotoCardList'
import { GlobalStyle } from './GlobalStyles'

export const App = () => (
  <>
  <GlobalStyle/>
  <CategoriesList/>
  <PhotoCardList/>
  </>
)
