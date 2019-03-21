import algoliasearch from "algoliasearch"
import produce from "immer"
import * as React from "react"

import { searchContext } from "./SearchProvider"

export type UseSearchOptions = algoliasearch.QueryParameters

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

const defaultOptions: UseSearchOptions = {
  hitsPerPage: 10,
}

const useSearch = (
  query: string,
  options: UseSearchOptions = defaultOptions,
) => {
  const search = React.useContext(searchContext)
  const [result, setResult] = React.useState<null | UseSearchResult>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [page, setPage] = React.useState(0)

  const hitsPerPage = options.hitsPerPage || defaultOptions.hitsPerPage!
  const loadMore = React.useCallback(() => {
    setPage(p => p + 1)
  }, [])

  React.useEffect(() => {
    setPage(0)
  }, [query])

  React.useEffect(() => {
    let cancel = false
    setLoading(true)
    setError(false)

    search
      .search<UseSearchResultItem>({ query, hitsPerPage, page })
      .then(
        response =>
          !cancel &&
          setResult(
            produce(current => {
              if (!current || page === 0) {
                return response
              }
              current.hits.push(...response.hits)
              current.page = response.page
              current.cursor = response.cursor
            }),
          ),
      )
      .catch(() => !cancel && setError(true))
      .finally(() => !cancel && setLoading(false))

    return () => {
      cancel = true
    }
  }, [query, page, hitsPerPage])

  return { result, loading, error, loadMore }
}

export default useSearch
