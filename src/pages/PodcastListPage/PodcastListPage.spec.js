import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PodcastListPage from './PodcastListPage'

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
      />
    )

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
          {
            id: 2,
            title: 'Some other',
            image: 'image2',
            author: 'author2',
          },
        ]}
        onClickDetails={onClickDetails}
      />
    )

    const back = screen.getAllByTestId('svg')
    back.forEach(event => {
      userEvent.click(event)
      expect(onClickDetails).toHaveBeenCalledWith(1)
    })
  })
})
