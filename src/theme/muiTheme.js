import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#33b310'
    },
    secondary: {
      main: '#ff5f0a'
    },
    text: {
      main: '#616161',
      h1: '#858e94',
      h2: '#9ca7ad'
    },
    error: {
      main: '#f00',
      contrastText: '#fff'
    }
  }
});

export default theme;