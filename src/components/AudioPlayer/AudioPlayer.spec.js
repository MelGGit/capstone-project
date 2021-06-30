import {render, screen} from '@testing-library/react'
import AudioPlayer from './AudioPlayer'
  
describe('AudioPlayer', () => {
    it('renders', () => {
        render(<AudioPlayer />)
        expect(screen.getByText('AudioPlayer')).toBeInTheDocument()
    })
})
      