import { matchPath, useLocation } from 'react-router-dom'

import { ArrowLeft } from 'react-feather'
import BackButton from '../BackButton/BackButton'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import { currentSearchTermState } from '../../states'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

export default function ConditionalHeader() {
  const { pathname } = useLocation()
  const [currentSearchTerm, setCurrentSearchTerm] = useRecoilState(
    currentSearchTermState
  )

  if (matchPath(pathname, { path: '/', exact: true })) {
    return <Header>PodPal</Header>
  }
  if (matchPath(pathname, { path: `/search/`, exact: true })) {
    return <Header>{'Search'}</Header>
  }
  if (matchPath(pathname, { path: `/search/${currentSearchTerm}` })) {
    return (
      <Container>
        <Back exact to="/search/" onClick={() => setCurrentSearchTerm('')}>
          <ArrowLeft />
        </Back>
        <Header
          margin={true}
          small={true}
        >{`Search for „${currentSearchTerm}“`}</Header>
      </Container>
    )
  }
  if (matchPath(pathname, { path: `/search/cat/` })) {
    return (
      <Container>
        <Back exact to="/search/" onClick={() => setCurrentSearchTerm('')}>
          <ArrowLeft />
        </Back>
        <Header
          margin={true}
          small={true}
        >{`Search in category „${currentSearchTerm}“`}</Header>
      </Container>
    )
  }
  if (matchPath(pathname, { path: '/favorites' })) {
    return <Header>Favorites</Header>
  }
  if (matchPath(pathname, { path: '/podcast' })) {
    return <BackButton />
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Back = styled(Link)`
  display: grid;
  place-items: center;
  margin-left: 2rem;
  color: inherit;
  z-index: 10;
`
