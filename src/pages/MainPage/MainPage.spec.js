import {render, screen} from '@testing-library/react'
import MainPage from './MainPage'
  
describe('MainPage', () => {
    it('renders', () => {
        render(<MainPage />)
        expect(screen.getByText('MainPage')).toBeInTheDocument()
    })
})
      