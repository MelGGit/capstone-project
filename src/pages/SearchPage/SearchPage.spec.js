import {render, screen} from '@testing-library/react'
import SearchPage from './SearchPage'
  
describe('SearchPage', () => {
    it('renders', () => {
        render(<SearchPage />)
        expect(screen.getByText('SearchPage')).toBeInTheDocument()
    })
})
      