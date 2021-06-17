const crypto = require('crypto')

export default function getAuthorisation() {
  const apiKey = process.env.API_KEY
  const apiSecret = process.env.API_SECRET

  // Hash for Authorization token
  const apiHeaderTime = Math.floor(Date.now() / 1000)
  const sha1Algorithm = 'sha1'
  const sha1Hash = crypto.createHash(sha1Algorithm)
  const data4Hash = apiKey + apiSecret + apiHeaderTime
  sha1Hash.update(data4Hash)
  const hash4Header = sha1Hash.digest('hex')

  return { apiHeaderTime, hash4Header }
}
