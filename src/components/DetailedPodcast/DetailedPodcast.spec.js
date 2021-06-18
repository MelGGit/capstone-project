import {render, screen} from '@testing-library/react'
import DetailedPodcast from './DetailedPodcast'
  
describe('DetailedPodcast', () => {
    it('renders', () => {
        render(<DetailedPodcast />)
        expect(screen.getByText('DetailedPodcast')).toBeInTheDocument()
    })
})
      