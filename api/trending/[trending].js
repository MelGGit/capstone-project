import fetchDataFromDB from '../fetchDataFromDB.js'

export default async function trending(req, res) {
  const request = req.query
  const url = `/podcasts/trending?${request.trending}&cat=${request.cat}`
  const trending = await fetchDataFromDB(url)

  res.status(200).json(trending)
}
