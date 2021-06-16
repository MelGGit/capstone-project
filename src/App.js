import React from 'react'
import styled from 'styled-components/macro'
import PodcastListPage from './pages/PodcastListPage/PodcastListPage'
import { Route, Switch } from 'react-router-dom'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import Navigation from './components/Navigation/Navigation'
import Div100vh from 'react-div-100vh'
import MainPage from './pages/MainPage/MainPage'
export default function App() {
  return (
    <AppContainer>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/search">
          <PodcastListPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/podcast/:id">
          <DetailsPage />
        </Route>
      </Switch>
      <Navigation />
    </AppContainer>
  )
}

const AppContainer = styled(Div100vh)`
  display: grid;
  grid-template-rows: 1fr 3rem;
`
