import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

PodcastCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default function PodcastCard({ image, title }) {
  return (
    <Card>
      <Image
        src={image}
        alt={`Podcast Picture of ${title}`}
        width="150px"
        height="150px"
      />
      <Title>{title}</Title>
    </Card>
  )
}

const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 16px;
  padding: 0.75rem 1rem;
  width: min(45%, 40rem);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 15px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const Image = styled.img`
  align-self: center;
`

const Title = styled.h2`
  text-align: center;
  font-size: clamp(0.5rem, -0.875rem + 8.333vw, 3.5rem);
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
