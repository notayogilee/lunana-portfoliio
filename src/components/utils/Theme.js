import { createMuiTheme } from '@material-ui/core/styles'

const ldBlue = "#00FFFF"
const ldWhite = "#FFFFFF"
const ldBlack = "#000000"
const ldGrey = "#E6E6E6"

export default createMuiTheme({
  palette: {
    common: {
      blue: ldBlue,
      white: ldWhite,
      black: ldBlack,
      grey: ldGrey
    },
    primary: {
      main: ldBlue
    },
    secondary: {
      main: ldGrey
    }
  }
})