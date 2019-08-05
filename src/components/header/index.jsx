import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar
} from '@material-ui/core';

import style from './style';

const useStyles = makeStyles(style);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <h6>Bonuz Alliances UI</h6>
      </Toolbar>
    </AppBar>
  )
}

export default Header;