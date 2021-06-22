import useFetch from './useFetch'

export default function usePodcastByFeedId(id) {
  const { data: episodesByFeedId, isQuerying } = useFetch(
    `/api/episodesByFeedId/${id}`
  )

  return { episodesByFeedId, isQuerying }
}
