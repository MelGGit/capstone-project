import styled from 'styled-components/macro'
import { Search } from 'react-feather'
import { useSetRecoilState } from 'recoil'
import { currentSearchTermState } from '../../states'

export default function SearchForm() {
  const setCurrentSearchTerm = useSetRecoilState(currentSearchTermState)

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
        <Input name={'search'} placeholder={'Podcasts'} />
      </Wrapper>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    setCurrentSearchTerm(form.elements.search.value)
    form.reset()
  }
}

const Form = styled.form`
  width: 100%;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  padding: 16px 16px 16px 53px;
  line-height: 1;
  color: inherit;
  background-color: var(--darkest-grey);
  border: 0;
  appearance: none;
  outline: 0;
  border-radius: 6px;
`

const SearchIconContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 16px;
  display: flex;
  align-items: center;
`
const SearchIcon = styled(Search)`
  color: var(--darker-grey);
`
