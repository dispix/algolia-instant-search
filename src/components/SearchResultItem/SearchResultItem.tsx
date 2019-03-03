import * as React from "react"
import CardHeader from "@material-ui/core/CardHeader"

import SearchResultItemAvatar from "./SearchResultItemAvatar"
import { makeStyles } from "@material-ui/styles"
import { Theme } from "../../features/Theme"

export interface SearchResultItemProps {
  category: string
  image: string
  image_ok: boolean
  link: string
  name: string
  objectID: string
  rank: number
}

const useStyles = makeStyles((theme: Theme) => {
  // tslint:disable-next-line
  console.log("theme:", theme)
  return {
    cardHeader: {
      cursor: "pointer",
      borderBottom: `1px solid ${theme.palette.divider}`,
      transition: theme.transitions.create("background-color"),
      "&:last-child": {
        borderBottom: "none",
      },
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }
})

const SearchResultItem = ({
  name,
  category,
  image,
  link,
}: SearchResultItemProps) => {
  const classes = useStyles()
  const handleClick = React.useCallback(() => {
    window.open(link, "_blank")
  }, [link])

  return (
    <CardHeader
      onClick={handleClick}
      className={classes.cardHeader}
      avatar={<SearchResultItemAvatar image={image} />}
      title={name}
      subheader={category}
    />
  )
}

export default SearchResultItem
