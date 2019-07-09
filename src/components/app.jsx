import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Grid,
  MuiThemeProvider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import style from './style';

const useStyles = makeStyles(style);

import Header from './header';
import Menu from './menu';
import Routes from '../routes';
import Toaster from './_useful/toaster';

import theme from '../theme/muiTheme';

const App = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container>
        <BrowserRouter>
          <Header />
          <div className={classes.content}>
            { /* <Grid item xs={2}>
              <Menu />
            </Grid> */ }
            <Grid item xs={12}>
              <Routes />
              <Toaster />
            </Grid>
          </div>
        </BrowserRouter>
      </Grid>
    </MuiThemeProvider>
  )
}

export default App;