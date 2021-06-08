import React from 'react'
import PodcastListPage from './pages/PodcastListPage/PodcastListPage'
import podcasts from './test_data_space.json'
import { Route, Switch, useHistory } from 'react-router-dom'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import { useState } from 'react'

function App() {
  const [detailedPodcast, setDetailedPodcast] = useState()
  const { push } = useHistory()
  return (
    <>
      <Switch>
        <Route exact path="/">
          <PodcastListPage
            podcasts={podcasts}
            onClickDetails={handleClickDetails}
          />
        </Route>
        <Route path="/details">
          <DetailsPage
            podcast={detailedPodcast}
            onClickDetailsBack={handleClickDetailsBack}
          />
        </Route>
      </Switch>
    </>
  )

  function handleClickDetails(id) {
    setDetailedPodcast(podcasts.find(podcast => podcast.id === id))
    push('/details')
  }

  function handleClickDetailsBack() {
    push('/')
  }
}

export default App
