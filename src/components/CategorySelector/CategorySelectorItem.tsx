import MenuItem from "@material-ui/core/MenuItem"
import * as React from "react"

export interface CategorySelectorItemProps {
  highlightedIndex?: number | null
  index?: number
  itemProps?: object
  selectedItem?: string
  suggestion: { label: string }
}

const CategorySelectorItem = ({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem,
}: CategorySelectorItemProps) => {
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || "").indexOf(suggestion.label) > -1

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  )
}

export default CategorySelectorItem
