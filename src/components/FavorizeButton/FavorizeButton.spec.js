import {render, screen} from '@testing-library/react'
import FavorizeButton from './FavorizeButton'
  
describe('FavorizeButton', () => {
    it('renders', () => {
        render(<FavorizeButton />)
        expect(screen.getByText('FavorizeButton')).toBeInTheDocument()
    })
})
      