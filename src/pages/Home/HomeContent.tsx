import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import CardContent from "@material-ui/core/CardContent"

import SearchResultList from "../../components/SearchResultList"
import { UseSearchResult } from "../../features/Search"

interface HomeContentProps {
  result: UseSearchResult | null
}

const useStyles = makeStyles({
  cardContent: {
    flex: 1,
    overflow: "scroll",
  },
})

const HomeContent = ({ result }: HomeContentProps) => {
  const classes = useStyles()

  return (
    <CardContent className={classes.cardContent}>
      {result && <SearchResultList items={result.hits} />}
    </CardContent>
  )
}

export default HomeContent
