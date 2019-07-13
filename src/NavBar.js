import React, { useRef } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = () => {
  const refThis = useRef();
  const handleClick = () => {
    console.log(refThis.current);
  };

  return (
    <div>
      <AppBar color="primary" position="static" ref={refThis}>
        <Toolbar>
          <Typography variant="subtitle1" color="inherit">
            React & Material-UI Sample Application
          </Typography>
          <button onClick={handleClick}>here</button>
        </Toolbar>
      </AppBar>
      <Toolbar>
        <Typography variant="subtitle1" color="inherit">
          React & Material-UI Sample Application
        </Typography>
      </Toolbar>
    </div>
  );
};
export default NavBar;
