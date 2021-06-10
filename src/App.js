import React from 'react'
import PodcastListPage from './pages/PodcastListPage/PodcastListPage'
import podcasts from './test_data_space.json'
import { Route, Switch, useHistory } from 'react-router-dom'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import { useState } from 'react'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'

function App() {
  const [detailedPodcast, setDetailedPodcast] = useState({})
  const [favoritePodcasts, setFavoritePodcasts] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)
  const { push } = useHistory()
  return (
    <Switch>
      <Route exact path="/">
        <PodcastListPage
          podcasts={podcasts}
          onClickDetails={handleClickDetails}
          onClickFavorites={handleClickFavoritesPage}
        />
      </Route>
      <Route path="/favorites">
        <FavoritesPage
          favoritePodcasts={favoritePodcasts}
          onClickDetails={handleClickDetails}
        />
      </Route>
      <Route path="/details">
        <DetailsPage
          podcast={detailedPodcast}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite}
        />
      </Route>
    </Switch>
  )

  // Click on Details in any component and
  // this function gets called with the id of the podcast you clicked
  function handleClickDetails(id) {
    // this function receives the id and sets the state of the detailed
    // podcast to the podcast you clicked
    setDetailedPodcast(podcasts.find(podcast => podcast.id === id))

    // this function checks, if the podcast you clicked is in the favoritePodcasts array to
    // it alters the functionality of the add to favorite/remove from favorite button
    setIsFavorite(favoritePodcasts.some(podcast => podcast.id === id))
    push('/details')
  }

  function handleToggleFavorite(id) {
    if (favoritePodcasts.some(podcast => podcast.id === id)) {
      handleRemoveFavorite(id)
    } else {
      handleAddFavorite(id)
    }
    setIsFavorite(!isFavorite)
  }

  function handleAddFavorite(id) {
    setFavoritePodcasts([
      podcasts.find(podcast => podcast.id === id),
      ...favoritePodcasts,
    ])
  }

  function handleRemoveFavorite(id) {
    setFavoritePodcasts(favoritePodcasts.filter(podcast => podcast.id !== id))
  }

  function handleClickFavoritesPage() {
    push('/favorites')
  }
}

export default App
