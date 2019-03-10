import * as React from "react"

import ScrollTrigger, { ScrollTriggerProps } from "../ScrollTrigger"
import SearchResultItem, { SearchResultItemProps } from "../SearchResultItem"

export interface SearchResultListProps {
  items: SearchResultItemProps[]
  triggerOffset?: ScrollTriggerProps["triggerOffset"]
  onTriggerIn?: ScrollTriggerProps["onTriggerIn"]
  onTriggerOut?: ScrollTriggerProps["onTriggerOut"]
}

const SearchResultList = ({
  items,
  ...scrollTriggerProps
}: SearchResultListProps) => (
  // @ts-ignore
  <ScrollTrigger {...scrollTriggerProps}>
    {items.map(item => (
      <SearchResultItem key={item.objectID} {...item} />
    ))}
  </ScrollTrigger>
)

export default SearchResultList
