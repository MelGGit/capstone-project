import { Route, Switch } from 'react-router-dom'

import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import ConditionalHeader from './components/ConditionalHeader/ConditionalHeader'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import Div100vh from 'react-div-100vh'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import MainPage from './pages/MainPage/MainPage'
import Navigation from './components/Navigation/Navigation'
import PodcastListPage from './pages/PodcastListPage/PodcastListPage'
import React from 'react'
import SearchCategoryPage from './pages/SearchCategoryPage/SearchCategoryPage'
import SearchPage from './pages/SearchPage/SearchPage'
import { playState } from './states'
import styled from 'styled-components/macro'
import { useRecoilValue } from 'recoil'

export default function App() {
  const play = useRecoilValue(playState)

  const routes = [
    { path: '/', Component: MainPage, exact: true },
    { path: '/search/', Component: SearchPage, exact: true },
    { path: '/search/:id', Component: PodcastListPage, exact: true },
    { path: '/search/cat/:id', Component: SearchCategoryPage },
    { path: '/favorites', Component: FavoritesPage },
    { path: '/podcast/:id', Component: DetailsPage },
  ]
  return (
    <AppContainer isPlay={play}>
      <ConditionalHeader />
      <Switch>
        {routes.map(({ Component, ...routeProps }) => (
          <Route key={routeProps.path} {...routeProps}>
            <Component />
          </Route>
        ))}
      </Switch>
      {play ? (
        <BottomContainer>
          <AudioPlayer audioObject={play} />
          <Navigation />
        </BottomContainer>
      ) : (
        <Navigation />
      )}
    </AppContainer>
  )
}

const AppContainer = styled(Div100vh)`
  display: grid;
  grid-template-rows: 3rem 1fr ${props => (props.isPlay ? '6.1rem' : '3rem')};
`
const BottomContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 3rem;
  gap: 0.1rem;
`
