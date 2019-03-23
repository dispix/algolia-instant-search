import algoliasearch from "algoliasearch"
import * as React from "react"

import { searchContext } from "./SearchProvider"

export type UseCategoriesResult = algoliasearch.SearchForFacetValues.Response

const useCategories = (query: string) => {
  const search = React.useContext(searchContext)
  const [result, setResult] = React.useState<null | UseCategoriesResult>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    setError(false)
    search
      .searchForFacetValues({ facetName: "category", facetQuery: query })
      .then(setResult)
      .catch(err => {
        // tslint:disable-next-line:no-console
        console.error(err)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [query])

  return { result, loading, error }
}

export default useCategories
