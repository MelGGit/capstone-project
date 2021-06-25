import { PageContainer } from '../../components/PageContainer/PageContainer'
import SideScroller from '../../components/SideScoller/SideScroller'
import styled from 'styled-components'

export default function MainPage() {
  const sliders = ['Science', 'Technology', 'Investing']

  return (
    <PageWrapper>
      {sliders.map(term => (
        <TrendingPodcastContainer key={term}>
          <h2>Trending in {term}</h2>
          <SideScroller term={`max=15&cat=${term.toLowerCase()}`} />
        </TrendingPodcastContainer>
      ))}
    </PageWrapper>
  )
}
const PageWrapper = styled(PageContainer)`
  display: grid;
  gap: 1rem;
`

const TrendingPodcastContainer = styled.section`
  height: 13rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-x: scroll;
`
