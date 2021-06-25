import { PageContainer } from '../../components/PageContainer/PageContainer'
import SideScroller from '../../components/SideScoller/SideScroller'
import styled from 'styled-components'

export default function MainPage() {
  return (
    <PageWrapper>
      <TrendingPodcastContainer>
        <h2>Trending in Science</h2>
        <SideScroller term={'max=10&cat=science'} />
      </TrendingPodcastContainer>
      <TrendingPodcastContainer>
        <h2>Trending in Technology</h2>
        <SideScroller term={'max=10&cat=technology'} />
      </TrendingPodcastContainer>
    </PageWrapper>
  )
}
const PageWrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const TrendingPodcastContainer = styled.section`
  height: 12rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
