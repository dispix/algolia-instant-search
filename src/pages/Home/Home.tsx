import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import Card from "@material-ui/core/Card"

import { useSearch } from "../../features/Search"
import HomeHeader from "./HomeHeader"
import HomeContent from "./HomeContent"

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
  const { result } = useSearch(search)

  return (
    <Card className={classes.card}>
      <HomeHeader result={result} search={search} onSearchChange={setSearch} />
      <HomeContent result={result} />
    </Card>
  )
}

export default Home
