import { PageContainer } from '../../components/PageContainer/PageContainer'
import SearchForm from '../../components/SearchForm/SearchForm'
import SideScroller from '../../components/SideScoller/SideScroller'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import useTrending from '../../hooks/useTrending'

export default function MainPage() {
  const { push } = useHistory()
  const {
    trending: trendingScience,
    isQuerying: isQueryingScience,
  } = useTrending('science')
  const {
    trending: trendingTechnology,
    isQuerying: isQueryingTechnology,
  } = useTrending('technology')

  return (
    <PageWrapper>
      <SearchForm onSubmit={handleSubmit} placeholder={'Podcast'} />
      <TrendingPodcastContainer>
        <h2>Trending in Science</h2>
        <SideScroller
          array={trendingScience?.feeds}
          isQuerying={isQueryingScience}
        />
      </TrendingPodcastContainer>
      <TrendingPodcastContainer>
        <h2>Trending in Technology</h2>
        <SideScroller
          array={trendingTechnology?.feeds}
          isQuerying={isQueryingTechnology}
        />
      </TrendingPodcastContainer>
    </PageWrapper>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const term = form.elements.search.value
    push(`/search/${term}`)
    form.reset()
  }
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
