import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/styles"
import Downshift from "downshift"
import React from "react"

import { useCategories } from "../../features/Search"

import CategorySelectorInput from "./CategorySelectorInput"
import CategorySelectorItem from "./CategorySelectorItem"

interface CategorySelectorProps {
  onSelect: (category: string) => void
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

const CategorySelector = ({ onSelect }: CategorySelectorProps) => {
  const classes = useStyles()
  const [search, setSearch] = React.useState("")
  const { result } = useCategories(search)

  const handleInputValueChange = React.useCallback(val => {
    setSearch(val)
  }, [])

  return (
    <Downshift
      inputValue={search}
      onInputValueChange={handleInputValueChange}
      onSelect={onSelect}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem,
        openMenu,
      }) => (
        <div className={classes.container}>
          <CategorySelectorInput
            label="Category"
            inputProps={getInputProps()}
            onFocus={openMenu}
            value={inputValue!}
          />
          {isOpen && result ? (
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
          ) : null}
        </div>
      )}
    </Downshift>
  )
}

export default CategorySelector
