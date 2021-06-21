import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Headline.propTypes = {
  childre: PropTypes.node.isRequired,
  small: PropTypes.bool,
}

export default function Headline({ children, small }) {
  return (
    <Header>
      <Text small={small}>{children}</Text>
    </Header>
  )
}

const Header = styled.header`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`
const Text = styled.h1`
  font-size: ${props => (props.small ? ' 1rem' : '1.5rem')};
`
