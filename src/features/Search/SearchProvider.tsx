import algoliasearch from "algoliasearch"
import * as React from "react"

export interface SearchProviderProps {
  children: React.ReactNode
}

export interface SearchContext {
  client: algoliasearch.Client
}

const client = algoliasearch("PCXK4F6V51", "bd577cf0c53a715595b454d7bef8b372")
const index = client.initIndex("apple_app_store_test")
export const searchContext = React.createContext(index)

const SearchProvider = ({ children }: SearchProviderProps) => (
  <searchContext.Provider value={index}>{children}</searchContext.Provider>
)

export default SearchProvider
