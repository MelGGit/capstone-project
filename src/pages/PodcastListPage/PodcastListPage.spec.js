import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PodcastListPage from './PodcastListPage'
import { forceVisible } from 'react-lazyload'

describe('PodcastListPage', () => {
  it('renders two Podcast Cards', () => {
    render(
      <PodcastListPage
        podcasts={[
          {
            id: 1,
            title: 'Murder On The Space Coast',
            image: 'image1',
            author: 'author1',
          },
          {
            id: 2,
            title: 'Some other',
            image: 'image2',
            author: 'author2',
          },
        ]}
        onClickDetails={jest.fn()}
        onClickFavorites={jest.fn()}
      />
    )

    forceVisible()

    expect(screen.getByText('Murder On The Space Coast')).toBeInTheDocument()
    expect(screen.getByText('Some other')).toBeInTheDocument()
    const imageListLength = screen.getAllByRole('img').length
    expect(imageListLength).toBe(2)
  })
  it('should call onClickDetails for each podcast and give it id as prop', () => {
    const onClickDetails = jest.fn()

    render(
      <PodcastListPage
        podcasts={[
          {
            id: 1,
            title: 'Murder On The Space Coast',
            image: 'image1',
            author: 'author1',
          },
        ]}
        onClickDetails={onClickDetails}
        onClickFavorites={jest.fn()}
      />
    )

    forceVisible()
    const detailsPage = screen.getByTestId('card')
    userEvent.click(detailsPage)
    expect(onClickDetails).toHaveBeenCalledWith(1)
  })
})
