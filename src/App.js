import PodcastListPage from './pages/PodcastListPage/PodcastListPage'
import podcasts from './test_data_space.json'

function App() {
  return <PodcastListPage podcasts={podcasts} />
}

export default App
