import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  childre: PropTypes.node.isRequired,
  small: PropTypes.bool,
}

export default function Header({ children, small }) {
  return <StyledHeader small={small}>{children}</StyledHeader>
}

const StyledHeader = styled.header`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: ${props => (props.small ? ' 1rem' : '1.5rem')};
`
