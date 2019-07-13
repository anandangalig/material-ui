import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
  sizeLarge: {
    color: 'blue',
    background: 'red',
  },
});

export default function ClassesNesting() {
  const classes = useStyles();

  return (
    <Button
      size="large" // this compiles to a makeStyles-sizeLarge class that a later customization can target
      className={classes.root}
      classes={{
        // classes property takes an object with specific keys that can override existing styles
        sizeLarge: classes.sizeLarge,
      }}
    >
      classes nesting
    </Button>
  );
}
