import { createMuiTheme, Theme as MuiTheme } from "@material-ui/core/styles"
import MuiThemeProvider, {
  ThemeProviderProps as MuiThemeProviderProps,
} from "@material-ui/styles/ThemeProvider"
import * as React from "react"

import { Omit } from "../../utils/Omit"

import { SPACING } from "./constants"

export type ThemeProviderProps = Omit<MuiThemeProviderProps, "theme">

export type Theme = MuiTheme

const theme = createMuiTheme({
  spacing: {
    unit: SPACING,
  },
})

const ThemeProvider = (props: ThemeProviderProps) => (
  <MuiThemeProvider {...props} theme={theme} />
)

export default ThemeProvider
