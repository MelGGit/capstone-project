import useFetch from './useFetch'

export default function useCategoriesList() {
  const { data: categoriesList, isQuerying } = useFetch(`/api/categoriesList`)

  return { categoriesList, isQuerying }
}
