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
    textPrimary: {
      main: '#4a4a4a'
    },
    textSecondary: {
      main: '#fff'
    },
    // Blue
    primary: {
        main: '#7498be',
        light: '#b8cddd',
        dark: '#164576',
        contrastText: '#fff',
        textPrimary: '#4a4a4a',
        overlay: 'rgba(116, 152, 190, .6)'
    },
    // Orange
    secondary: {
        main: '#f26346',
        light: '#fedcd2',
        contrastText: '#fff',
        overlay: 'rgba(254, 220, 210, .5)'
    },
    success: {
      main: '#4caf50'
    },
    error: {
      main: '#f00',
    },
    background: {
        default: '#fff',
        grey: '#fafafa',
        overlay: 'rgba(0,0,0, .5)'
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
      h1: {
        fontFamily: '"The Girl Next Door", cursive',
        
      },
      h2: {
     
      },
      h3: {
        fontFamily: '"The Girl Next Door", cursive',
      },
      h4: {
        fontFamily: '"The Girl Next Door", cursive',
      },
      h6: {
        // color: '#4a4a4a',
        fontWeight: '300'
      },

      useNextVariants: true
    

  },
  
})
theme = responsiveFontSizes(theme);

export default theme;