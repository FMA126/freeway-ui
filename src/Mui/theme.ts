import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
  },
  palette: {
    primary: {
      main: '#B22234',
    },
    secondary: {
      main: '#3C3B6E',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
