import styled from 'styled-components/macro'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import PropTypes from 'prop-types'

PodcastListPage.propTypes = {
  podcasts: PropTypes.array.isRequired,
}

export default function PodcastListPage({ podcasts }) {
  return (
    <PageContainer>
      {podcasts.map(({ image, title, id, author, description, categories }) => (
        <PodcastCard
          key={id}
          image={image}
          title={title}
          author={author}
          description={description}
          categories={categories ? categories : {}}
        />
      ))}
    </PageContainer>
  )
}

const PageContainer = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px 20px;
`
