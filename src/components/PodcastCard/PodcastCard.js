import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

PodcastCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default function PodcastCard({ image, title }) {
  return (
    <Card>
      <PodcastImage src={image} alt="Podcast" />
      <PodcastTitle>{title}</PodcastTitle>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  border-radius: 16px;
  padding: 0.75rem 1rem;
  width: min(45%, 40rem);
  box-shadow: 0 0 10px rgb(25, 50, 81, 10%), 0 20px 40px rgb(25, 50, 81, 50%);
`
const PodcastImage = styled.img`
  display: block;
  overflow: hidden;
  width: 100%;
`

const PodcastTitle = styled.h2`
  text-align: center;
  font-size: 4vw;
  width: 100%;
`
