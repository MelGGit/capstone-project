import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DetailsPage from './DetailsPage'

describe('DetailsPage', () => {
  it('renders a page with details', () => {
    render(
      <DetailsPage
        podcast={{
          id: 1,
          title: 'Murder On The Space Coast',
          image: 'image1',
          author: 'author1',
          description: 'This is a long description',
          categories: {
            26: 'Fiction',
            67: 'Science',
            1: 'Arts',
            7: 'Performing',
          },
        }}
        onClickDetailsBack={jest.fn()}
      />
    )
    const list = screen.getAllByRole('listitem')
    const listLength = list.length

    expect(screen.getByText('Murder On The Space Coast')).toBeInTheDocument()
    expect(screen.getByText('author1')).toBeInTheDocument()
    expect(screen.getByText('This is a long description')).toBeInTheDocument()
    expect(screen.getByRole('img').src).toEqual('http://localhost/image1')
    expect(listLength).toBe(4)
  })
  it('should call onClickDetailsBack', () => {
    const onClickDetailsBack = jest.fn()

    render(
      <DetailsPage
        podcast={{
          id: 1,
          title: 'Murder On The Space Coast',
          image: 'image1',
          author: 'author1',
          description: 'This is a long description',
          categories: {
            26: 'Fiction',
            67: 'Science',
            1: 'Arts',
            7: 'Performing',
          },
        }}
        onClickDetailsBack={onClickDetailsBack}
      />
    )

    const back = screen.getByRole('button')
    userEvent.click(back)
    expect(onClickDetailsBack).toHaveBeenCalled()
  })
})
