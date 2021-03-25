import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#5c67a3', //RGU light purple
      main: '#86428b', //RGU purple
      dark: '#712177', //RGU purple dark
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff79b0',
      main: '#ff4081',
      dark: '#c60055',
      contrastText: '#000',
    },
      openTitle: '#712177',
      protectedTitle: pink['400'],
      type: 'light'
    }
  })

  export default theme