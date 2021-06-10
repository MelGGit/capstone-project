import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PodcastCard from './PodcastCard'
// needed since the component PodcastCard is lazy, it doesnt show in the jsdom
// therefore the function forceVisible() is to show it in the dom for testing
import { forceVisible } from 'react-lazyload'

describe('PodcastCard', () => {
  it('renders an image and title', () => {
    render(
      <PodcastCard
        title="Murder On The Space Coast"
        image="http://localhost/some%20path"
        author="Someone"
        id={1}
        onClickDetails={jest.fn()}
      />
    )

    forceVisible()
    expect(screen.getByText('Murder On The Space Coast')).toBeInTheDocument()
    expect(screen.getByText('Someone')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img').src).toEqual('http://localhost/some%20path')
  })
  it('should call onCLickDetails and give it id as prop', () => {
    const onClickDetails = jest.fn()

    render(
      <PodcastCard
        title="Murder On The Space Coast"
        image="http://localhost/some%20path"
        author="Someone"
        id={1}
        onClickDetails={onClickDetails}
      />
    )
    forceVisible()
    const details = screen.getByTestId('card')
    userEvent.click(details)
    expect(onClickDetails).toHaveBeenCalledWith(1)
  })
})
