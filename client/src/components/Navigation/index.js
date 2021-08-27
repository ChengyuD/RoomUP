import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Auth from '../../utils/auth'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 500
  },
  navBar: {
    backgroundColor: "darkGrey"
  },
  loginButton: {
    color: "white",
    textDecoration: "none"
  }
}));

export default function Navigation() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <div>
            {/* <IconButton
                start= "edge"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
            </IconButton> */}
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.loginButton}>RoomUP</Link>
          </Typography>
          <div>
            {Auth.loggedIn() ? (
              <>
                <Button color="inherit">
                      <Link className={classes.loginButton} onClick={logout}>Logout</Link>
                    </Button>
                    <Button color="inherit">
                      <Link to="/profile" className={classes.loginButton}>Profile</Link>
                    </Button>
              </>
            ) : (
              <>
                <Button color="inherit">
                  <Link to="/login" className={classes.loginButton}>Login</Link>
                </Button>
                <Button color="inherit">
                  <Link to="/Signup" className={classes.loginButton}>Sign up</Link>
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}