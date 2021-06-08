import {render, screen} from '@testing-library/react'
import DetailsPage from './DetailsPage'
  
describe('DetailsPage', () => {
    it('renders', () => {
        render(<DetailsPage />)
        expect(screen.getByText('DetailsPage')).toBeInTheDocument()
    })
})
      