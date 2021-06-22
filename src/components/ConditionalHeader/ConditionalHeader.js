import { matchPath, useLocation } from 'react-router-dom'

import BackButton from '../BackButton/BackButton'
import Header from '../Header/Header'
import { currentSearchTermState } from '../../states'
import { useRecoilValue } from 'recoil'

export default function ConditionalHeader() {
  const { pathname } = useLocation()
  const currentSearchTerm = useRecoilValue(currentSearchTermState)

  if (matchPath(pathname, { path: '/', exact: true })) {
    return <Header>PodcastFinder</Header>
  }
  if (matchPath(pathname, { path: '/search/' })) {
    return <Header small={true}>{`Search for „${currentSearchTerm}“`}</Header>
  }
  if (matchPath(pathname, { path: '/favorites' })) {
    return <Header>Favorites</Header>
  }
  if (matchPath(pathname, { path: '/podcast' })) {
    return <BackButton />
  }
}
