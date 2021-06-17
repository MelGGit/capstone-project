import fetchDataFromDB from '../fetchDataFromDB.js'

export default async function byTerm(req, res) {
  const searchTerm = req.query.byTerm
  const url = '/search/byterm?q=' + searchTerm

  const podcastsByTerm = await fetchDataFromDB(url)

  res.status(200).json(podcastsByTerm)
}
