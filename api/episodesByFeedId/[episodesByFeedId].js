import fetchDataFromDB from '../fetchDataFromDB.js'

export default async function episodesByFeedId(req, res) {
  const feedId = req.query.episodesByFeedId
  const url = `/episodes/byfeedid?id=${feedId}`

  const episodesByFeedId = await fetchDataFromDB(url)

  res.status(200).json(episodesByFeedId)
}
