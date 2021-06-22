import { Route, Switch } from 'react-router-dom'

import ConditionalHeader from './components/ConditionalHeader/ConditionalHeader'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import Div100vh from 'react-div-100vh'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import MainPage from './pages/MainPage/MainPage'
import Navigation from './components/Navigation/Navigation'
import PodcastListPage from './pages/PodcastListPage/PodcastListPage'
import React from 'react'
import styled from 'styled-components/macro'

export default function App() {
  const routes = [
    { path: '/', Component: MainPage, exact: true },
    { path: '/search/:id', Component: PodcastListPage },
    { path: '/favorites', Component: FavoritesPage },
    { path: '/podcast/:id', Component: DetailsPage },
  ]
  return (
    <AppContainer>
      <ConditionalHeader />
      <Switch>
        {routes.map(({ Component, ...routeProps }) => (
          <Route key={routeProps.path} {...routeProps}>
            <Component />
          </Route>
        ))}
      </Switch>
      <Navigation />
    </AppContainer>
  )
}

const AppContainer = styled(Div100vh)`
  display: grid;
  grid-template-rows: 3rem 1fr 3rem;
`
