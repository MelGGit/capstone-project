import styled from 'styled-components/macro'
import { Search, Star } from 'react-feather'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <Nav>
      <NavItems>
        <StyledNavLink
          exact
          to="/"
          activeStyle={{ color: 'var(--white)', scale: '1.05' }}
        >
          <NavIcon>
            <Search size={24} />
          </NavIcon>
          Search
        </StyledNavLink>

        <StyledNavLink
          to="/favorites"
          activeStyle={{ color: 'var(--white)', scale: '1.05' }}
        >
          <NavIcon>
            <Star size={24} />
          </NavIcon>
          Favorites
        </StyledNavLink>
      </NavItems>
    </Nav>
  )
}

const Nav = styled.nav`
  padding: 0.5rem 3rem;
  background: var(--black-akzent);
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  width: 100%;
`

const NavItems = styled.ul`
  display: flex;
  flex: 1;
  list-style: none;
  padding: 0 2rem;
  justify-content: space-around;
`

const StyledNavLink = styled(NavLink)`
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.6rem;
  gap: 0.1rem;
  text-decoration: none;
  color: var(--darker-grey);
`

const NavIcon = styled.span``