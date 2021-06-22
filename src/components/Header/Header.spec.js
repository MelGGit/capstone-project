import {render, screen} from '@testing-library/react'
import Headline from './Headline'
  
describe('Headline', () => {
    it('renders', () => {
        render(<Headline />)
        expect(screen.getByText('Headline')).toBeInTheDocument()
    })
})
      