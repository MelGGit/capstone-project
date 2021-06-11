import { render, screen } from '@testing-library/react'
import PodcastCard from './PodcastCard'
// needed since the component PodcastCard is lazy, it doesnt show in the jsdom
// therefore the function forceVisible() is to show it in the dom for testing
import { forceVisible } from 'react-lazyload'
import { Router } from 'react-router-dom'

describe('PodcastCard', () => {
  it('renders an image and title', () => {
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() }

    render(
      <Router history={historyMock}>
        <PodcastCard
          podcast={{
            title: 'Murder On The Space Coast',
            image: 'http://localhost/some%20path',
            author: 'Someone',
            id: 1,
          }}
        />
      </Router>
    )

    forceVisible()
    expect(screen.getByText('Murder On The Space Coast')).toBeInTheDocument()
    expect(screen.getByText('Someone')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img').src).toEqual('http://localhost/some%20path')
  })
})
