import useFetch from './useFetch'

export default function useSearchByTerm(term) {
  const { data: podcastsByTerm, isQuerying } = useFetch(`/api/byTerm/${term}`)

  return { podcastsByTerm, isQuerying }
}
