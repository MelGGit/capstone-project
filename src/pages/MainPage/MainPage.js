import { PageContainer } from '../../components/PageContainer/PageContainer'
import SearchForm from '../../components/SearchForm/SearchForm'
import { useHistory } from 'react-router-dom'
import { currentSearchTermState } from '../../states'
import { useSetRecoilState } from 'recoil'

export default function MainPage() {
  const { push } = useHistory()
  const setCurrentSearchTerm = useSetRecoilState(currentSearchTermState)
  return (
    <PageContainer>
      <SearchForm onSubmit={handleSubmit} placeholder={'Podcast'} />
    </PageContainer>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const term = form.elements.search.value
    setCurrentSearchTerm(term)
    push(`/search/${term}`)
    form.reset()
  }
}