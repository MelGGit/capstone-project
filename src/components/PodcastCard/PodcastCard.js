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
  gap: 30px;
  justify-content: center;
  border-radius: 16px;
  padding: 2rem 2.25rem;
  width: min(80%, 40rem);
  box-shadow: 0 0 10px rgb(25, 50, 81, 10%), 0 20px 40px rgb(25, 50, 81, 50%);
`
const PodcastImage = styled.img`
  display: block;
`

const PodcastTitle = styled.h2`
  text-align: center;
`
