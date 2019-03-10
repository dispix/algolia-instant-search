import algoliasearch from "algoliasearch"
import * as React from "react"

import { searchContext } from "./SearchProvider"

export interface UseSearchResultItem {
  category: string
  image: string
  image_ok: boolean
  link: string
  name: string
  objectID: string
  rank: number
}

export type UseSearchResult = algoliasearch.Response<UseSearchResultItem>

const useSearch = (query: string) => {
  const search = React.useContext(searchContext)
  const [result, setResult] = React.useState<null | UseSearchResult>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    search.search<UseSearchResultItem>(query, (error, content) => {
      if (error) {
        setError(true)
      } else {
        setResult(content)
      }
      setLoading(false)
    })
  }, [query])

  return { result, loading, error }
}

export default useSearch
