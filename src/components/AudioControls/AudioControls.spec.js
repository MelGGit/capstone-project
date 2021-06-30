import {render, screen} from '@testing-library/react'
import AudioControls from './AudioControls'
  
describe('AudioControls', () => {
    it('renders', () => {
        render(<AudioControls />)
        expect(screen.getByText('AudioControls')).toBeInTheDocument()
    })
})
      