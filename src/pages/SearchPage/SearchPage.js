import { PageContainer } from '../../components/PageContainer/PageContainer'
import SearchForm from '../../components/SearchForm/SearchForm'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

export default function SearchPage() {
  const { push } = useHistory()

  return (
    <PageContainer>
      <SearchForm onSubmit={handleSubmit} placeholder={'Podcast'} />
      <Container>
        <h2>Search by category</h2>
      </Container>
    </PageContainer>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const term = form.elements.search.value
    push(`/search/${term}`)
    form.reset()
  }
}

const Container = styled.div``
