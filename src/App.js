import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar';
import Card from './Card';
import Tabs from './Tabs';
import Buttons from './Buttons';
import Griddy from './Griddy';

const useStyles = makeStyles(theme => {
  // console.log(theme);
  return {
    roooot: {
      width: '100%',
      height: 1500,
      maxWidth: 1200,
    },
  };
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.roooot}>
      <NavBar />
      <Typography variant="h1" component="h2" align="center" gutterBottom>
        Hi there
      </Typography>
      <Card />
      <Tabs />
      <Buttons />
      <Griddy />
      <CssBaseline />
    </div>
  );
}

export default App;
