import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import { currentSearchTermState } from '../../states'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import useTrending from '../../hooks/useTrending'

export default function SearchCategoryPage() {
  const { id: term } = useParams()
  const { trending, isQuerying } = useTrending(`max=40&cat=${term}`)
  const setCurrentSearchTerm = useSetRecoilState(currentSearchTermState)
  setCurrentSearchTerm(term)

  if (isQuerying)
    return (
      <PageWrapper>
        <LoadingSpinner />
      </PageWrapper>
    )

  return (
    <PageWrapper>
      {trending.feeds.map(podcast => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </PageWrapper>
  )
}

const PageWrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
