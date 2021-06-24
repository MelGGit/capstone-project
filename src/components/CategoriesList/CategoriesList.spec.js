import {render, screen} from '@testing-library/react'
import CategoriesList from './CategoriesList'
  
describe('CategoriesList', () => {
    it('renders', () => {
        render(<CategoriesList />)
        expect(screen.getByText('CategoriesList')).toBeInTheDocument()
    })
})
      