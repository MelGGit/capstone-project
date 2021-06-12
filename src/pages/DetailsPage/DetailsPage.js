import styled from 'styled-components/macro'
import FavorizeButton from '../../components/FavorizeButton/FavorizeButton'
import BackButton from '../../components/BackButton/BackButton'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import { useParams } from 'react-router'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { detailedPodcastState } from '../../states'
import podcasts from '../../test_data_space.json'
import { useEffect, useState } from 'react'
import LoadingScreen from '../../components/Loading Screen/LoadingScreen'

export default function DetailsPage() {
  const { id } = useParams()
  const [podcastDetails, setPodcastDetails] = useRecoilState(
    detailedPodcastState
  )
  const [isLoading, setIsLoading] = useState(true)

  const reset = useResetRecoilState(detailedPodcastState)

  useEffect(() => {
    setPodcastDetails(podcasts.find(podcast => podcast.id === Number(id)))
    setTimeout(() => setIsLoading(false), 400)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const { image, title, author, description, categories } = podcastDetails

  return (
    <PageContainer>
      <BackButton />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <ContentWrapper>
          <HeaderContainer>
            <ImageContainer>
              <Image src={image} alt={`Poster`} width="40px" height="40px" />
            </ImageContainer>
            <InnerContainer>
              <Title>{title}</Title>
              <Author>{author}</Author>
            </InnerContainer>
          </HeaderContainer>
          <BodyContainer>
            <FavorizeButton id={Number(id)} />
            <Text>{description}</Text>
            {categories && (
              <TagList>
                {Object.entries(categories).map(([key, value]) => (
                  <Tag key={key}>{value}</Tag>
                ))}
              </TagList>
            )}
          </BodyContainer>
        </ContentWrapper>
      )}
    </PageContainer>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`
const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
  width: min(100%, 40.7rem);
`
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: min(100%, 40.7rem);
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
`
const TagList = styled.ul`
  margin-top: 1rem;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
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
