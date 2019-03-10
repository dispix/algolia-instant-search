import * as React from "react"

import SearchProvider from "./features/Search"
import ThemeProvider from "./features/Theme"
import Home from "./pages/Home"

const App = () => (
  <ThemeProvider>
    <SearchProvider>
      <Home />
    </SearchProvider>
  </ThemeProvider>
)

export default App
