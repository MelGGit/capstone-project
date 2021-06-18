import useFetch from './useFetch'

export default function usePodcastByFeedId(id) {
  const { data: podcastByFeedId, isQuerying } = useFetch(
    `/api/podcastByFeedId/${id}`
  )

  return { podcastByFeedId, isQuerying }
}
