import {render, screen} from '@testing-library/react'
import EpisodeCardsList from './EpisodeCardsList'
  
describe('EpisodeCardsList', () => {
    it('renders', () => {
        render(<EpisodeCardsList />)
        expect(screen.getByText('EpisodeCardsList')).toBeInTheDocument()
    })
})
      