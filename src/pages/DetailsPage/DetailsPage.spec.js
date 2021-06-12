import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RecoilRoot } from 'recoil'
import DetailsPage from './DetailsPage'

describe('DetailsPage', () => {
  it('renders a page with details', () => {
    render(
      <RecoilRoot>
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
        />
      </RecoilRoot>
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
        onToggleFavorite={jest.fn()}
        isFavorite={false}
      />
    )

    const allButtons = screen.getAllByRole('button')
    const backButton = allButtons[0]
    userEvent.click(backButton)
    expect(onClickDetailsBack).toHaveBeenCalled()
  })
  it('should call onToggleFavorites with argument id', () => {
    const onToggleFavorite = jest.fn()

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
        onToggleFavorite={onToggleFavorite}
        isFavorite={false}
      />
    )

    const toggleFavorite = screen.getByTestId('favorize-button')
    userEvent.click(toggleFavorite)
    expect(onToggleFavorite).toHaveBeenCalledWith(1)
  })
})
