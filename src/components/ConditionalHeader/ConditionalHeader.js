import { matchPath, useLocation } from 'react-router-dom'

import BackButton from '../BackButton/BackButton'
import Headline from '../Headline/Headline'
import { currentSearchTermState } from '../../states'
import { useRecoilValue } from 'recoil'

export default function ConditionalHeader() {
  const { pathname } = useLocation()
  const currentSearchTerm = useRecoilValue(currentSearchTermState)

  if (matchPath(pathname, { path: '/', exact: true })) {
    return <Headline>PodcastFinder</Headline>
  }
  if (matchPath(pathname, { path: '/search/' })) {
    return (
      <Headline small={true}>{`Search for „${currentSearchTerm}“`}</Headline>
    )
  }
  if (matchPath(pathname, { path: '/favorites' })) {
    return <Headline>Favorites</Headline>
  }
  if (matchPath(pathname, { path: '/podcast' })) {
    return <BackButton />
  }
}
