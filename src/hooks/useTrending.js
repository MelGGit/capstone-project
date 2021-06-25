import useFetch from './useFetch'

export default function useTrending(term) {
  const { data: trending, isQuerying } = useFetch(`/api/trending/${term}`)

  return { trending, isQuerying }
}
