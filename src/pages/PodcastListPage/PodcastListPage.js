import styled from 'styled-components/macro'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import PropTypes from 'prop-types'

PodcastListPage.propTypes = {
  podcasts: PropTypes.array.isRequired,
}

export default function PodcastListPage({ podcasts }) {
  return (
    <PageContainer>
      {podcasts.map(({ image, title, id }) => (
        <PodcastCard key={id} image={image} title={title} />
      ))}
    </PageContainer>
  )
}

const PageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px 20px;
`
