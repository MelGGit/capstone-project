/* eslint-disable import/no-anonymous-default-export */
const crypto = require('crypto')
const axios = require('axios')

export default async (req, res) => {
  const searchTerm = req.query.byTerm
  const apiKey = process.env.API_KEY
  const apiSecret = process.env.API_SECRET

  // Hash for Authorization token
  const apiHeaderTime = Math.floor(Date.now() / 1000)
  const sha1Algorithm = 'sha1'
  const sha1Hash = crypto.createHash(sha1Algorithm)
  const data4Hash = apiKey + apiSecret + apiHeaderTime
  sha1Hash.update(data4Hash)
  const hash4Header = sha1Hash.digest('hex')

  const response = await axios.get(
    'https://api.podcastindex.org/api/1.0/search/byterm?q=' + searchTerm,
    {
      headers: {
        'X-Auth-Date': '' + apiHeaderTime,
        'X-Auth-Key': apiKey,
        Authorization: hash4Header,
        'User-Agent': 'SuperPodcastPlayer/1.8',
      },
    }
  )
  return res.send(response.data)
}
