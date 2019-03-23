import FormControl from "@material-ui/core/FormControl"
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton"
import Input, { InputProps } from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import InputLabel from "@material-ui/core/InputLabel"
import Close from "@material-ui/icons/Close"
import * as React from "react"

export interface CategorySelectorInputProps {
  inputProps: InputProps
  iconButtonProps: IconButtonProps
}

const CategorySelectorInput = ({
  inputProps,
  iconButtonProps,
}: CategorySelectorInputProps) => (
  <FormControl>
    <InputLabel htmlFor={inputProps.id || "category-selection"}>
      Category
    </InputLabel>
    <Input
      id="category-selection"
      {...inputProps}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="Reset selection" {...iconButtonProps}>
            <Close />
          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>
)

export default CategorySelectorInput
