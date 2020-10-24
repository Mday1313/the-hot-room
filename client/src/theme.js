import { createMuiTheme } from '@material-ui/core/styles'


const theme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      black: '#000',
      grey: '#707070',
      white: '#fff',
    },
    // Green
    primary: {
        main: '#056571',
        light: '#bee8e5',
        contrastText: '#fff',
      
    },
    // Orange
    secondary: {
        main: '#f26346',
        light: '#fedcd2',
        contrastText: '#fff',
    },
    success: {
      main: '#4caf50'
    },
    error: {
      main: '#f00',
    },
    background: {
      default: '#fff',
    },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
  },
  typography: {
    fontFamily: '"Josefin Sans", "Roboto", "Helvetica", "Arial", sans-serif',
  },
})

export default theme