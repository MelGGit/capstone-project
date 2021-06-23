import {render, screen} from '@testing-library/react'
import SideScrollerItem from './SideScrollerItem'
  
describe('SideScrollerItem', () => {
    it('renders', () => {
        render(<SideScrollerItem />)
        expect(screen.getByText('SideScrollerItem')).toBeInTheDocument()
    })
})
      