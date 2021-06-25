import fetchDataFromDB from './fetchDataFromDB.js'

export default async function categoriesList(req, res) {
  const url = `/categories/list?`
  const categoriesList = await fetchDataFromDB(url)

  res.status(200).json(categoriesList)
}
