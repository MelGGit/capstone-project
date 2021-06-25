import PropTypes from 'prop-types'
import { Search } from 'react-feather'
import styled from 'styled-components/macro'

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
}

export default function SearchForm({ onSubmit, placeholder }) {
  return (
    <Form onSubmit={onSubmit}>
      <Wrapper>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
        <Input name={'search'} placeholder={placeholder} autoComplete="off" />
      </Wrapper>
    </Form>
  )
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
