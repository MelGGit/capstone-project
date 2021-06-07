import { render, screen } from '@testing-library/react'
import PodcastListPage from './PodcastListPage'

describe('PodcastListPage', () => {
  it('renders two Podcast Cards', () => {
    render(
      <PodcastListPage
        podcasts={[
          {
            id: '1',
            title: 'Murder On The Space Coast',
            image:
              'https://www.omnycontent.com/d/playlist/a858b0a5-e5e6-4a14-9717-a70b010facc1/6c32fe2a-7527-4559-b897-ab370147e602/61cbce74-5204-4af7-bf01-ab370147e615/image.jpg?t=1578085538&size=Large',
          },
          {
            id: '2',
            title: 'Zimmerman in Space',
            image:
              'https://podcast.npo.nl/data/thumb/zimmerman-in-space.1400.057c0afe044d4192abe401a27f84d12e.jpg',
          },
        ]}
      />
    )
    expect(screen.getByText('Murder On The Space Coast')).toBeInTheDocument()
    expect(screen.getByText('Zimmerman in Space')).toBeInTheDocument()

    const imageListLength = screen.getAllByRole('img').length

    expect(imageListLength).toBe(2)
  })
})
