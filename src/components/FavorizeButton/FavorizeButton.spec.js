import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FavorizeButton from './FavorizeButton'

describe('FavorizeButton', () => {
  it('renders a button with an svg and text', () => {
    render(
      <FavorizeButton isFavorite={false} onToggleFavorite={jest.fn} id={1} />
    )
    expect(screen.getByText('Add to Favorites')).toBeInTheDocument()
    expect(screen.getByTestId('svg')).toBeInTheDocument()
  })
  it('should invoke onToggleFavorites with id as argument', () => {
    const favorize = jest.fn()
    render(
      <FavorizeButton isFavorite={false} onToggleFavorite={favorize} id={1} />
    )

    const favorizeButton = screen.getByRole('button')
    userEvent.click(favorizeButton)
    expect(favorize).toHaveBeenCalledWith(1)
  })
})
