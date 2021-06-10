import React from 'react'
import PodcastListPage from './pages/PodcastListPage/PodcastListPage'
import { Route, Switch, useHistory } from 'react-router-dom'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'

function App() {
  const { push } = useHistory()

  return (
    <Switch>
      <Route exact path="/">
        <PodcastListPage onClickFavorites={handleClickFavoritesPage} />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
      <Route path="/details">
        <DetailsPage />
      </Route>
    </Switch>
  )

  function handleClickFavoritesPage() {
    push('/favorites')
  }
}

export default App
