import {render, screen} from '@testing-library/react'
import CategoriesCard from './CategoriesCard'
  
describe('CategoriesCard', () => {
    it('renders', () => {
        render(<CategoriesCard />)
        expect(screen.getByText('CategoriesCard')).toBeInTheDocument()
    })
})
      