import * as React from "react"
import SearchResultItem, {
  SearchResultItemProps,
} from "../SearchResultItem/SearchResultItem"

export interface SearchResultListProps {
  items: SearchResultItemProps[]
}

const SearchResultList = ({ items }: SearchResultListProps) => (
  <React.Fragment>
    {items.map(item => (
      <SearchResultItem key={item.objectID} {...item} />
    ))}
  </React.Fragment>
)

export default SearchResultList
