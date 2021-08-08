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
  logoText: {
    flexGrow: 1,
    fontFamily: 'Palette Mosaic, cursive',
    marginLeft: "40px"
  },
  logo: {
    // flexGrow: 1,
    display: "inline-flex",
    fontFamily: 'Palette Mosaic, cursive',
    marginLeft: "40px",
    height: 55,
    width: 55,
    padding: "4px 5px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    border: '2px solid #333'
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();

  const handleLogOut = () => {
    Auth.signOut();
    history.push('/login');
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" component={Paper} color="white">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography color="textPrimary" variant="h6" className={classes.logo}>
            ems
          </Typography>
          <Typography color="textPrimary" variant="h6" className={classes.logoText}>
            Enhanced Microblogging Service
          </Typography>
          <Button color="primary" size="small" onClick={handleLogOut}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
