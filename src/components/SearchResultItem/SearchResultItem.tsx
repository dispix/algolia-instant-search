import CardHeader, { CardHeaderProps } from "@material-ui/core/CardHeader"
import { makeStyles } from "@material-ui/styles"
import * as React from "react"
import { animated, useSpring } from "react-spring"

import { Theme } from "../../features/Theme"

import SearchResultItemAvatar from "./SearchResultItemAvatar"

export interface SearchResultItemProps {
  category: string
  image: string
  image_ok: boolean
  link: string
  name: string
  objectID: string
  rank: number
}

const useStyles = makeStyles((theme: Theme) => ({
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
}))

const HeaderComponent = (props: CardHeaderProps) => {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } })
  // @ts-ignore
  return <animated.div style={style} {...props} />
}

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
      component={HeaderComponent}
      onClick={handleClick}
      className={classes.cardHeader}
      avatar={<SearchResultItemAvatar image={image} />}
      title={name}
      subheader={category}
    />
  )
}

export default SearchResultItem
