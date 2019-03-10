import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from "@material-ui/styles"
import * as React from "react"

import SearchResultList from "../../components/SearchResultList"
import { UseSearchResult } from "../../features/Search"

interface HomeContentProps {
  result: UseSearchResult | null
  onLoadMore: () => void
}

const useStyles = makeStyles({
  cardContent: {
    flex: 1,
    overflow: "scroll",
  },
})

const HomeContent = ({ result, onLoadMore }: HomeContentProps) => {
  const classes = useStyles()

  return (
    <CardContent className={classes.cardContent}>
      {result && (
        <SearchResultList
          items={result.hits}
          triggerOffset={2}
          onTriggerIn={onLoadMore}
        />
      )}
    </CardContent>
  )
}

export default HomeContent
