import styled from 'styled-components/macro'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import PropTypes from 'prop-types'

PodcastListPage.propTypes = {
  podcasts: PropTypes.array.isRequired,
  onClickDetails: PropTypes.func.isRequired,
}

export default function PodcastListPage({ podcasts, onClickDetails }) {
  return (
    <PageContainer>
      {podcasts.map(({ image, title, id, author }) => (
        <PodcastCard
          key={id}
          image={image}
          title={title}
          author={author}
          id={id}
          onClickDetails={onClickDetails}
        />
      ))}
    </PageContainer>
  )
}

const PageContainer = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
