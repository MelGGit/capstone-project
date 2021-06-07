import PodcastListPage from './pages/PodcastListPage/PodcastListPage'
import podcasts from './test_data_space.json'

function App() {
  return (
    <div>
      <PodcastListPage podcasts={podcasts} />
    </div>
  )
}

export default App
