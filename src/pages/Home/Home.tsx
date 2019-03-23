import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/styles"
import * as React from "react"

import { useSearch } from "../../features/Search"

import HomeContent from "./HomeContent"
import HomeHeader from "./HomeHeader"

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 900,
    height: "100vh",
    borderRadius: "0 !important",
    margin: "auto",
  },
})

const Home = () => {
  const classes = useStyles()
  const [search, setSearch] = React.useState("")
  const [category, setCategory] = React.useState<null | string>(null)

  const options = React.useMemo(
    () => ({
      facetFilters: category ? [`category:${category}`] : [],
    }),
    [category],
  )
  const { result, loadMore } = useSearch(search, options)

  return (
    <Card className={classes.card}>
      <HomeHeader
        result={result}
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
      />
      <HomeContent result={result} onLoadMore={loadMore} />
    </Card>
  )
}

export default Home
