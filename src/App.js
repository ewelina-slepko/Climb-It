import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
  const classes = useStyles();

  function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                News
          </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Navbar></Navbar>
        </div>
      </BrowserRouter>
    );
  }

  export default App;
