import { findByText, render, screen, waitFor } from '@testing-library/react'
import FavoritesPage from './FavoritesPage'

describe('FavoritesPage', () => {
  it('renders', async () => {
    render(
      <FavoritesPage
        favoritePodcasts={[
          {
            title: 'test',
            image: 'http://localhost/some%20path',
            author: 'Someone',
            id: 1,
          },
        ]}
        onClickDetails={jest.fn()}
        onClickBackFavorites={jest.fn()}
      />
    )
  })
})
