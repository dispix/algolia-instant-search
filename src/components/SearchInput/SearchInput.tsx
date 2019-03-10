import TextField, { TextFieldProps } from "@material-ui/core/TextField"
import * as React from "react"

export type SearchInputProps = TextFieldProps

const SearchInput = React.memo((props: SearchInputProps) => (
  <TextField {...props} />
))

export default SearchInput
