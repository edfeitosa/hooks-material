import { createMuiTheme } from '@material-ui/core';
import {
  green,
  grey,
  amber
} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green['A700']
    },
    secondary: {
      main: amber[500]
    }
  },
  spacing: 10,
  typography: {
    h1: {
      color: grey[600],
      fontSize: '2rem',
      fontWeight: 500,
      margin: '30px 0px'
    },
    h2: {
      fontSize: '1.5rem',
      color: grey[400],
      margin: '30px 0px'
    },
    h6: {
      color: '#fff'
    }
  }
});

export default theme;