import {render, screen} from '@testing-library/react'
import SearchForm from './SearchForm'
  
describe('SearchForm', () => {
    it('renders', () => {
        render(<SearchForm />)
        expect(screen.getByText('SearchForm')).toBeInTheDocument()
    })
})
      