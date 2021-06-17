import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const isQuerying = data === null

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const jsonData = await response.json()
      setData(jsonData)
    }

    fetchData()
  }, [url])

  return { data, isQuerying }
}
