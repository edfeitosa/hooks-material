import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from './style';

const useStyles = makeStyles(style);

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <h1>Envio de Cupons</h1>
      <h2>Posicionamento dos cards</h2>
      <div className='container'>

      </div>
    </Fragment>
  )
}

export default Home;