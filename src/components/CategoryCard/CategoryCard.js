import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

CategoryCard.propTypes = {
  category: PropTypes.object,
}
export default function CategoryCard({ category }) {
  return (
    <StyledLink to={`/search/cat/${category.name.toLowerCase()}`}>
      <Card color={category.color}>{category.name}</Card>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Card = styled.div`
  background: ${props => props.color};
  height: 4rem;
  display: grid;
  place-items: center;
  font-weight: 500;
  border-radius: 5px;
`
