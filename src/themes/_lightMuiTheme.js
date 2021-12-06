import { createTheme } from '@material-ui/core/styles'
// Use createMuiTheme here is good for theme object key suggestion

// TODO ! complete theme
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 784,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiTableCell: {
      root: {
        fontSize: '14px',
        borderBottom: 'none',
      },
      head: {
        color: '#000000',
        background: 'rgb(208, 206, 206)',
        fontWeight: 'bold',
      },
      body: {
        color: '#000000',
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#1B285C',
      light: '#1B42A5',
    },
    secondary: {
      main: '#F05923',
      light: '#F7931E',
    },
    // success: {
    //   main: '#CDFFCD',
    //   dark: '#007F00',
    // },
    // warning: {
    //   main: '#FFECCC',
    //   dark: '#965E00',
    // },
    // error: {
    //   main: '#FFE0E0',
    //   dark: '#D30000',
    // },
    // info: {
    //   main: '#E0FFF8',
    //   dark: '#113162',
    //   light: 'rgba(218, 235, 255, 0.2)',
    // },
    // gradient: {
    //   main: 'linear-gradient(77.5deg, #408CBB 0%, #CDEAFA 110.27%)',
    //   dark: 'linear-gradient(150.62deg, #1B295D 11.31%, #1C4170 81.99%)',
    //   light: 'linear-gradient(150.62deg, #1E517E 11.31%, #4182A2 81.99%)',
    //   main180: 'linear-gradient(180deg, #428DBC 0%, #BBDEF2 100%)',
    // },
    text: {
      primary: '#2E3192',
      secondary: '#F05923',
      disabled: '#6BA8D7',
      hint: '#007FB2',
    },
    background: {
      default: '#7BB8C8',
      menu: 'rgba(255, 255, 255, 0.9)',
      main: 'linear-gradient(77.5deg, #408CBB 0%, #CDEAFA 110.27%)',
      dark: 'linear-gradient(150.62deg, #1B295D 11.31%, #1C4170 81.99%)',
      light: 'linear-gradient(150.62deg, #1E517E 11.31%, #4182A2 81.99%)',
      main140: 'linear-gradient(140deg, #428DBC 0%, #BBDEF2 100%)',
      main124: 'linear-gradient(124deg, #428DBC 0%, #BBDEF2 100%)',
      secondaryLight: '#FFBD6D',
    },
    divider: 'rgba(37, 33, 59, 0.3)',
    tonalOffset: 0.4,
    typography: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont,"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell","Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
  },
})

export default theme
