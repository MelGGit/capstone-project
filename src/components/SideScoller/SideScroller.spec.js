import {render, screen} from '@testing-library/react'
import SideScroller from './SideScroller'
  
describe('SideScroller', () => {
    it('renders', () => {
        render(<SideScroller />)
        expect(screen.getByText('SideScroller')).toBeInTheDocument()
    })
})
      