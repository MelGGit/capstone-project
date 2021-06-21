import { PageContainer } from '../../components/PageContainer/PageContainer'
import SearchForm from '../../components/SearchForm/SearchForm'
import { useHistory } from 'react-router-dom'

export default function MainPage() {
  const { push } = useHistory()

  return (
    <PageContainer>
      <SearchForm onSubmit={handleSubmit} placeholder={'Podcast'} />
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
