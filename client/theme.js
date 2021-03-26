import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#955999', //RGU light purple
      main: '#86428b', //RGU purple
      dark: '#712177', //RGU purple dark
      contrastText: '#fff',
    },
    secondary: {
      light: '#955999',
      main: '#86428b',
      dark: '#712177',
      contrastText: '#000',
    },
      openTitle: '#86428b',
      protectedTitle: '#86428b',
      type: 'light'
    }
  })

  export default theme