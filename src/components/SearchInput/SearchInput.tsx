import * as React from "react"
import TextField, { TextFieldProps } from "@material-ui/core/TextField"

export type SearchInputProps = TextFieldProps

const SearchInput = React.memo((props: SearchInputProps) => {
  return <TextField {...props} />
})

export default SearchInput
