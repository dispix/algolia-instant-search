import CardHeader from "@material-ui/core/CardHeader"
import * as React from "react"

import algoliaBlueMark from "../../assets/algolia-blue-mark.svg"
import CategorySelector from "../../components/CategorySelector"
import SearchInput, { SearchInputProps } from "../../components/SearchInput"
import { UseSearchResult } from "../../features/Search"

type ChangeHandler = NonNullable<SearchInputProps["onChange"]>

export interface HomeHeaderProps {
  result: UseSearchResult | null
  search: string
  category: string | null
  onSearchChange: (value: string) => void
  onCategoryChange: (value: string | null) => void
}

const HomeHeader = ({
  result,
  search,
  category,
  onSearchChange,
  onCategoryChange,
}: HomeHeaderProps) => {
  const handleSearchChange = React.useCallback<ChangeHandler>(event => {
    onSearchChange(event.currentTarget.value)
  }, [])

  return (
    <React.Fragment>
      <CardHeader title="Search the App store" />
      <CardHeader
        avatar={<img src={algoliaBlueMark} height={24} alt="algolia logo" />}
        title={
          <div style={{ display: "flex" }}>
            <SearchInput
              value={search}
              onChange={handleSearchChange}
              label="Search"
            />
            <CategorySelector selected={category} onSelect={onCategoryChange} />
          </div>
        }
        subheader={result ? `${result.nbHits} hits` : ""}
      />
    </React.Fragment>
  )
}

export default HomeHeader
