import CategoryCard from '../../components/CategoryCard/CategoryCard'
import { PageContainer } from '../../components/PageContainer/PageContainer'
import SearchForm from '../../components/SearchForm/SearchForm'
import categoriesList from '../../categories.json'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

export default function SearchPage() {
  const { push } = useHistory()

  return (
    <PageContainer>
      <SearchForm onSubmit={handleSubmit} placeholder={'Podcast'} />
      <Container>
        <h2>Search by category</h2>
        <List>
          {categoriesList.feeds.map(category => (
            <ListItem key={category.id}>
              <CategoryCard category={category} />
            </ListItem>
          ))}
        </List>
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

const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`
const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`
const ListItem = styled.li``
