import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
  margin: PropTypes.bool,
}

export default function Header({ children, small, margin }) {
  return (
    <StyledHeader small={small} margin={margin}>
      {children}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  height: 100%;
  display: grid;
  margin-left: ${props => (props.margin ? '-2rem' : '')};
  place-items: center;
  font-size: ${props => (props.small ? ' 1rem' : '1.5rem')};
  background: var(--black-accent);
`
