import React, { Fragment } from 'react';
import {
  Card,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import style from './style';

const useStyles = makeStyles(style);

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h1">
        Página Inicial
      </Typography>
      <Typography variant="h2">
        Posicionamento dos cards
      </Typography>
      <div className={classes.container}>
        <Card className={classes.card}>
          Show Success
        </Card>
        <Card className={classes.card}>
          Show Error
        </Card>
        <Card className={classes.card}>
          Show Info
        </Card>
      </div>
      <a>Teste</a>
      <div className='spanVermelho'>Aqui vai o texto</div>
    </Fragment>
  )
}

export default Home;