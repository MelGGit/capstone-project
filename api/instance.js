import getAuthorisation from './getAuthorisation'
const axios = require('axios')

export default function axiosInstance() {
  const apiKey = process.env.API_KEY

  const { apiHeaderTime, hash4Header } = getAuthorisation()

  const axiosInstance = axios.create({
    baseURL: 'https://api.podcastindex.org/api/1.0',
    headers: {
      'X-Auth-Date': '' + apiHeaderTime,
      'X-Auth-Key': apiKey,
      Authorization: hash4Header,
      'User-Agent': 'SuperPodcastPlayer/1.8',
    },
  })

  return axiosInstance
}
