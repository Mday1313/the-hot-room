import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'


let theme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      black: '#000',
      grey: '#4a4a4a',
      white: '#fff',
    },
    info: {
        main: '#fff'
    },
    // Green
    primary: {
        main: '#5a7bb1',
        light: '#acd3f2',
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
theme = responsiveFontSizes(theme);

export default theme;