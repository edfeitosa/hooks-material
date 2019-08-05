import theme from '../../theme/muiTheme';

const style = {
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'sans-serif'
    },
    h1: {
      color: theme.palette.text.h1,
      fontSize: '2rem',
      fontWeight: 700
    },
    h2: {
      color: theme.palette.text.h2,
      fontSize: '1.5rem',
      fontWeight: 500
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 500,
      margin: 0
    },
    a: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.primary.main,
        fontWeight: 700
      }
    },
    '.content': {
      display: 'flex',
      padding: '10px 30px',
      width: '100%'
    },
    '.container': {
      display: 'flex',
      justifyContent: 'space-between',
      '& .paragraph': {
        color: theme.palette.text.main
      }
    }
  }
}

export default style;