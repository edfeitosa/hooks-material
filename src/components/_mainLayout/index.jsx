import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import style from './style';

const useStyles = makeStyles(style);

import Header from '../header';
import Menu from '../menu';
import Routes from '../../routes';

const MainLayout = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <BrowserRouter>
        <Header />
        <div className={classes.content}>
          { /* <Grid item xs={2}>
              <Menu />
            </Grid> */ }
          <Grid item xs={12}>
            <Routes />
          </Grid>
        </div>
      </BrowserRouter>
    </Grid>
  )
}

export default MainLayout;