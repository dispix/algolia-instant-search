import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/styles"
import Downshift from "downshift"
import React from "react"

import { useCategories } from "../../features/Search"

import CategorySelectorInput from "./CategorySelectorInput"
import CategorySelectorItem from "./CategorySelectorItem"

interface CategorySelectorProps {
  selected: string | null
  onSelect: (category: string | null) => void
}

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: theme.spacing.unit,
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    width: 250,
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
}))

const CategorySelector = ({ selected, onSelect }: CategorySelectorProps) => {
  const classes = useStyles()
  const [search, setSearch] = React.useState("")
  const { result } = useCategories(search)

  const clearSelected = React.useCallback(onSelect.bind(null, null), [])

  return (
    <Downshift
      inputValue={search}
      onInputValueChange={setSearch}
      onSelect={onSelect}
      selectedItem={selected}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        isOpen,
        selectedItem,
      }) => (
        <div className={classes.container}>
          <CategorySelectorInput
            inputProps={getInputProps()}
            iconButtonProps={{ onClick: clearSelected }}
          />
          {isOpen && result && (
            <Paper {...getMenuProps()} className={classes.paper}>
              {result.facetHits.map((category, index) => (
                <CategorySelectorItem
                  {...{
                    key: index,
                    index,
                    highlightedIndex,
                    selectedItem,
                  }}
                  suggestion={{ label: category.value }}
                  itemProps={getItemProps({ item: category.value })}
                />
              ))}
            </Paper>
          )}
        </div>
      )}
    </Downshift>
  )
}

export default CategorySelector
