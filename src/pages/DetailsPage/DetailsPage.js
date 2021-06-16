import styled from 'styled-components/macro'
import FavorizeButton from '../../components/FavorizeButton/FavorizeButton'
import BackButton from '../../components/BackButton/BackButton'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import { useParams } from 'react-router'
import { useRecoilState, useRecoilValue } from 'recoil'
import { detailedPodcastState, searchedPodcastsByTermState } from '../../states'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

export default function DetailsPage() {
  const { id } = useParams()
  const [podcastDetails, setPodcastDetails] = useRecoilState(
    detailedPodcastState
  )
  const searchedPodcastsByTerm = useRecoilValue(searchedPodcastsByTermState)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setPodcastDetails(
      searchedPodcastsByTerm.find(podcast => podcast.id === Number(id))
    )
    setTimeout(() => setIsLoading(false), 400)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const { image, title, author, description, categories } = podcastDetails

  return (
    <PageWrapper>
      <BackButton />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ContentWrapper>
          <ImageContainer>
            <Image src={image} alt={`Poster`} width="40px" height="40px" />
          </ImageContainer>
          <InnerContainer>
            <Title>{title}</Title>
            <Author>{author}</Author>
          </InnerContainer>
          <FavorizeContainer>
            <FavorizeButton id={Number(id)} />
          </FavorizeContainer>
          <Text>{description}</Text>
          {categories && (
            <TagList>
              {Object.entries(categories).map(([key, value]) => (
                <Tag key={key}>{value}</Tag>
              ))}
            </TagList>
          )}
        </ContentWrapper>
      )}
    </PageWrapper>
  )
}
const PageWrapper = styled(PageContainer)``

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, min-content);
  gap: 1rem;
  width: min(100%, 40.7rem);
`

const FavorizeContainer = styled.div`
  grid-column: span 2;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`
const ImageContainer = styled.div`
  height: auto;
  width: 100%;
  display: block;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`
const Title = styled.h2`
  font-size: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const Author = styled.h3`
  font-weight: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const Text = styled.p`
  font-weight: 100;
  font-size: 0.8rem;
  grid-column: span 2;
`
const TagList = styled.ul`
  margin-top: 1rem;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  grid-column: span 2;
`

const Tag = styled.li`
  background: var(--black-akzent);
  list-style: none;
  font-size: 0.7rem;
  padding: 0.5rem 0.5rem;
  border-radius: 10px;
  margin: 0 0.25rem 0.25rem 0;
  display: list-item;
`
