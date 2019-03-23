import algoliasearch from "algoliasearch"
import * as React from "react"

export interface SearchProviderProps {
  children: React.ReactNode
}

export interface SearchContext {
  client: algoliasearch.Client
}

const client = algoliasearch("PCXK4F6V51", process.env.REACT_APP_API_KEY!)
const index = client.initIndex("apple_app_store_test")
export const searchContext = React.createContext(index)

const SearchProvider = ({ children }: SearchProviderProps) => (
  <searchContext.Provider value={index}>{children}</searchContext.Provider>
)

export default SearchProvider
