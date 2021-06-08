import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

DetailsPage.propTypes = {
  podcast: PropTypes.object.isRequired,
  onClickDetailsBack: PropTypes.func.isRequired,
}

export default function DetailsPage({ podcast, onClickDetailsBack }) {
  const { image, title, author, description, categories } = podcast
  return (
    <Wrapper>
      <Button onClick={onClickDetailsBack}>
        <SVG
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
        >
          <path d="M3.828 9l6.071-6.071-1.414-1.414-8.485 8.485 8.485 8.485 1.414-1.414-6.071-6.071h16.172v-2h-16.172z"></path>
        </SVG>
      </Button>
      <HeaderContainer>
        <ImageContainer>
          <Image src={image} alt={`Podcast `} width="400px" height="400px" />
        </ImageContainer>
        <InnerContainer>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </InnerContainer>
      </HeaderContainer>
      <Text>{description}</Text>
      <TagList>
        {Object.entries(categories).map(([key, value]) => (
          <Tag key={key}>{value}</Tag>
        ))}
      </TagList>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 1rem;
  width: 100%;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  margin-top: 3rem;
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
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  margin: 0 0.25rem 0.25rem 0;
  display: list-item;
`

const SVG = styled.svg`
  fill: var(--white);
`
const Button = styled.button`
  background: none;
  width: 1.5rem;
  height: 1rem;
  border: none;
  cursor: pointer;
`
