import {render, screen} from '@testing-library/react'
import SearchCategoryPage from './SearchCategoryPage'
  
describe('SearchCategoryPage', () => {
    it('renders', () => {
        render(<SearchCategoryPage />)
        expect(screen.getByText('SearchCategoryPage')).toBeInTheDocument()
    })
})
      