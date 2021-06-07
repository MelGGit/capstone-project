import styled from 'styled-components/macro'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import PropTypes from 'prop-types'

PodcastListPage.propTypes = {
  podcasts: PropTypes.array.isRequired,
}

export default function PodcastListPage({ podcasts }) {
  return (
    <PageContainerPL>
      {podcasts.map(({ image, title, id }) => (
        <PodcastCard key={id} image={image} title={title} />
      ))}
    </PageContainerPL>
  )
}

const PageContainerPL = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`
