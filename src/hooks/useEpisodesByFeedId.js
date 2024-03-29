import useFetch from './useFetch'

export default function useEpisodesByFeedId(id) {
  const { data: episodesByFeedId, isQuerying } = useFetch(
    `/api/episodesByFeedId/${id}`
  )

  return { episodesByFeedId, isQuerying }
}
