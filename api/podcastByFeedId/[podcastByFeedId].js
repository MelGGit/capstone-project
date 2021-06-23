import fetchDataFromDB from '../fetchDataFromDB.js'

export default async function podcastByFeedId(req, res) {
  const feedId = req.query.podcastByFeedId
  const url = `/podcasts/byfeedid?id=${feedId}`

  const podcastByFeedId = await fetchDataFromDB(url)

  res.status(200).json(podcastByFeedId)
}
