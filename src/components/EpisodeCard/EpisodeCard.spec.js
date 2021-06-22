import {render, screen} from '@testing-library/react'
import EpisodeCard from './EpisodeCard'
  
describe('EpisodeCard', () => {
    it('renders', () => {
        render(<EpisodeCard />)
        expect(screen.getByText('EpisodeCard')).toBeInTheDocument()
    })
})
      