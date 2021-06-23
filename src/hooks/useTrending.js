import useFetch from './useFetch'

export default function useTrending(term) {
  const { data: trending, isQuerying } = useFetch(
    `/api/trending/max=10&cat=${term}`
  )

  return { trending, isQuerying }
}
