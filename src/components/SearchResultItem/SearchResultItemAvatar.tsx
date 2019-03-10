import Avatar from "@material-ui/core/Avatar"
import * as React from "react"

export interface SearchResultItemAvatarProps {
  image: string
}

type ErrorHandler = (event: React.SyntheticEvent<HTMLDivElement, Event>) => void

const SearchResultItemAvatar = ({ image }: SearchResultItemAvatarProps) => {
  const [error, setError] = React.useState(false)
  const handleError = React.useCallback<ErrorHandler>(() => {
    setError(true)
  }, [])

  return (
    <Avatar
      aria-label="App icon"
      src={error ? undefined : image}
      onError={handleError}
    >
      ?
    </Avatar>
  )
}

export default SearchResultItemAvatar
