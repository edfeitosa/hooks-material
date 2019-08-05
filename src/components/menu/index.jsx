import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import style from './style';

const useStyles = makeStyles(style);

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <Link to="/">[ Home ]</Link>
    </div>
  )
}

export default Menu;