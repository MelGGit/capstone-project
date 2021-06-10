import styled from 'styled-components/macro'
import FavorizeButton from '../../components/FavorizeButton/FavorizeButton'
import BackButton from '../../components/BackButton/BackButton'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import { useRecoilValue } from 'recoil'
import { detailedPodcastState } from '../../states'

export default function DetailsPage() {
  const detailedPodcast = useRecoilValue(detailedPodcastState)
  const { image, title, author, description, categories } = detailedPodcast

  return (
    <PageContainer>
      <BackButton />
      <HeaderContainer>
        <ImageContainer>
          <Image
            src={image}
            alt={`Podcast `}
            width="400px"
            height="400px"
            loading="lazy"
          />
        </ImageContainer>
        <InnerContainer>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </InnerContainer>
      </HeaderContainer>
      <BodyContainer>
        <FavorizeButton id={detailedPodcast?.id || 1} />
        <Text>{description}</Text>
        {categories && (
          <TagList>
            {Object.entries(categories).map(([key, value]) => (
              <Tag key={key}>{value}</Tag>
            ))}
          </TagList>
        )}
      </BodyContainer>
    </PageContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  margin-top: 2rem;
`
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`
const InnerContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`
const ImageContainer = styled.div`
  width: 50%;
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
  font-weight: bold;
  font-size: 0.875rem;
  padding: 0.5rem 0.5rem;
  border-radius: 10px;
  margin: 0 0.25rem 0.25rem 0;
  display: list-item;
`
