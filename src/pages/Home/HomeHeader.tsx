import CardHeader from "@material-ui/core/CardHeader"
import * as React from "react"

import SearchInput, { SearchInputProps } from "../../components/SearchInput"
import { UseSearchResult } from "../../features/Search"

type ChangeHandler = NonNullable<SearchInputProps["onChange"]>

export interface HomeHeaderProps {
  result: UseSearchResult | null
  search: string
  onSearchChange: (value: string) => void
}

const HomeHeader = ({ result, onSearchChange, search }: HomeHeaderProps) => {
  const handleSearchChange = React.useCallback<ChangeHandler>(event => {
    onSearchChange(event.currentTarget.value)
  }, [])

  return (
    <React.Fragment>
      <CardHeader title="Search the App store" />
      <CardHeader
        title={
          <SearchInput
            value={search}
            onChange={handleSearchChange}
            label="Search"
          />
        }
        subheader={result ? `${result.nbHits} hits` : ""}
      />
    </React.Fragment>
  )
}

export default HomeHeader
