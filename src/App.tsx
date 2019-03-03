import * as React from "react"
import SearchProvider from "./features/Search"
import Home from "./pages/Home"
import ThemeProvider from "./features/Theme"

const App = () => (
  <ThemeProvider>
    <SearchProvider>
      <Home />
    </SearchProvider>
  </ThemeProvider>
)

export default App
