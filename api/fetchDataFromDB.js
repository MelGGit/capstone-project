import instance from './instance.js'

export default async function fetchDataFromDB(path) {
  const axios = instance()

  const response = await axios.get(path)
  const data = await response.data
  return data
}
