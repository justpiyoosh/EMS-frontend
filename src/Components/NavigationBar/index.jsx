import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Auth from '../../Config/Auth';

const useStyles = makeStyles((theme) => ({
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

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();

  const handleLogOut = () => {
    Auth.signOut();
    if (!Auth.isAuthenticated)
      history.push('/login');
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" component={Paper} color="white">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            EMS
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
