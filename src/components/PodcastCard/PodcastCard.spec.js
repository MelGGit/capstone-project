import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PodcastCard from './PodcastCard'

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

    const back = screen.getByTestId('svg')
    userEvent.click(back)
    expect(onClickDetails).toHaveBeenCalledWith(1)
  })
})
