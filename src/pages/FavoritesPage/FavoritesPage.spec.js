import { render, screen } from '@testing-library/react'
import FavoritesPage from './FavoritesPage'
// needed since the component PodcastCard is lazy, it doesnt show in the jsdom
// therefore the function forceVisible() is to show it in the dom for testing
import { forceVisible } from 'react-lazyload'
import userEvent from '@testing-library/user-event'

describe('FavoritesPage', () => {
  it('renders a podcast card and displays all given values', () => {
    render(
      <FavoritesPage
        favoritePodcasts={[
          {
            title: 'Murder On The Space Coast',
            image: 'http://localhost/some%20path',
            author: 'Someone',
            id: 1,
          },
        ]}
        onClickDetails={jest.fn()}
        onClickBackFavorites={jest.fn()}
      />
    )
    forceVisible()
    expect(screen.getByText('Murder On The Space Coast')).toBeInTheDocument()
    expect(screen.getByText('Someone')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img').src).toEqual('http://localhost/some%20path')
  })
  it('renders a button and the user is able to click it to go back', () => {
    const back = jest.fn()
    render(
      <FavoritesPage
        favoritePodcasts={[
          {
            title: 'Murder On The Space Coast',
            image: 'http://localhost/some%20path',
            author: 'Someone',
            id: 1,
          },
        ]}
        onClickDetails={jest.fn()}
        onClickBackFavorites={back}
      />
    )
    forceVisible()

    const backButton = screen.getByRole('button')
    userEvent.click(backButton)
    expect(back).toHaveBeenCalled()
  })
})
