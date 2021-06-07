import { render, screen } from '@testing-library/react'
import PodcastCard from './PodcastCard'

describe('PodcastCard', () => {
  it('renders an image and title', () => {
    render(
      <PodcastCard
        title="Murder On The Space Coast"
        image="https://www.omnycontent.com/d/playlist/a858b0a5-e5e6-4a14-9717-a70b010facc1/6c32fe2a-7527-4559-b897-ab370147e602/61cbce74-5204-4af7-bf01-ab370147e615/image.jpg?t=1578085538&size=Large"
      />
    )
    expect(screen.getByText('Murder On The Space Coast')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
