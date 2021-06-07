import { render, screen } from '@testing-library/react'
import PodcastCard from './PodcastCard'

describe('PodcastCard', () => {
  it('renders an image and title', () => {
    render(
      <PodcastCard
        title="Murder On The Space Coast"
        image="http://localhost/some%20path"
      />
    )

    expect(screen.getByText('Murder On The Space Coast')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img').src).toEqual('http://localhost/some%20path')
  })
})
