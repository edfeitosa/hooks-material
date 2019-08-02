import theme from '../../theme/muiTheme';

const style = {
  '@global': {
    body: {
      margin: '0px',
      padding: '0px',
      fontFamily: 'sans-serif'
    },
    a: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      cursor: 'pointer'
    },
    '.spanVermelho': {
      color: '#f00'
    },
    '.content': {
      display: 'flex',
      padding: '0px 30px',
      width: '100%'
    }
  }
}

export default style;