import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useState } from 'react'

PodcastCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
  categories: PropTypes.object,
}

export default function PodcastCard({
  image,
  title,
  author,
  description,
  categories,
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card onClick={() => setExpanded(!expanded)} clicked={expanded}>
      <CardMainContainer clicked={expanded}>
        <Image
          src={image}
          alt={`Podcast Picture of `}
          width="150px"
          height="150px"
        />
        <InnerContainer>
          <Title>{title}</Title>
          <Author clicked={expanded}>by {author}</Author>
        </InnerContainer>
      </CardMainContainer>
      {expanded && (
        <CardExpandContainer>
          <p>{description}</p>
          <TagList>
            {Object.entries(categories)?.map(([key, value]) => (
              <Tag key={key}>{value}</Tag>
            ))}
          </TagList>
        </CardExpandContainer>
      )}
    </Card>
  )
}

const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  border-radius: 16px;
  padding: 0.75rem 1rem;
  width: ${props => (props.clicked ? '90%' : 'min(60%, 40rem)')};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 15px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const CardMainContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.clicked ? 'row' : 'column')};
  gap: 1rem;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Image = styled.img`
  align-self: center;
`
const Author = styled.h3`
  display: ${props => (props.clicked ? '' : 'none')};
  font-size: clamp(0.5rem, -0.9rem + 8.333vw, 3.5rem);
  text-align: center;
`

const Title = styled.h2`
  text-align: center;
  font-size: clamp(0.5rem, -0.7rem + 8.333vw, 3rem);
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const CardExpandContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const TagList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const Tag = styled.li`
  background: var(--mint);
  color: var(--black);
  list-style: none;
  font-weight: bold;
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  margin: 0 0.25rem 0.25rem 0;
  display: list-item;
`
