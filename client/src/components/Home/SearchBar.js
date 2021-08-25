import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import FormGroup from '@material-ui/core/FormGroup';
import Hidden from '@material-ui/core/Hidden'
import { Link } from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles(() => ({
  wrapper: {
    backgroundColor: "white",
    borderRadius: "35px",
    boxShadow: "2px 2px 6px 0px"
  },
  description: {
    
  },
  type: {

  },
  formControl: {
    margin: 0,
    minWidth: 120,
  },
  buttonOutside: {
    display: "block",
    margin: "auto",
    textAlign: "center"
    
  },
  button: {
    borderRadius: "20px",
    minWidth: 150,
  },
  divider: {
    display: "",
      
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
}));


  export default function SearchBar() {
    const classes = useStyles();
    const [type, setType] = React.useState('');
      const handleChange = (event) => {
      setSearchValue(searchValue);
      setType(event.target.value);
      console.log(event.target.value);
    };

    const [searchValue, setSearchValue] = React.useState('');
    const handleClick = (event) => {
      event.preventDefault();
      console.log(searchValue);
      console.log(type)
    }
  
    return (
      <Container className={classes.wrapper} spacing={0}>
        <Grid spacing={2}container>
          
          <Grid item md={3} sm={3} xs={12}
          className={classes.description}
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
            <h3>Where are you looking to live?</h3>
          </Grid>

          <Hidden xsDown>
          <Grid><Divider orientation="vertical" /></Grid>
          </Hidden>

          <Grid item md={3} sm={2} xs={6}
          className={classes.description}
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
            <TextField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} variant="standard" placeholder="Irvine, CA" className="search-bar" id="searchtext" />
          </Grid>

          <Grid><Divider orientation="vertical" /></Grid>

          <Grid item md={3} sm={3} xs={5}
          className={classes.type}
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
            <FormGroup className={classes.formControl}>
              <Select
              displayEmpty
              value={type}
              onChange={handleChange}>
              <MenuItem selected disabled value="">
                Type of housing
              </MenuItem>
              <MenuItem value={"apartment"}>Apartment</MenuItem>
              <MenuItem value={"condo"}>Condo</MenuItem>
              <MenuItem value={"house"}>House</MenuItem>
              </Select>
          </FormGroup>
          </Grid>

          <Hidden xsDown>
          <Grid><Divider orientation="vertical" /></Grid>
          </Hidden>

          <Grid item md={2} sm={3} xs={12}
          className={classes.buttonOutside}
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
            <Button className={classes.button} to="/searchPage" variant="contained" color="secondary" onClick={handleClick}>
                <Link className={classes.link} to="/searchPage">Search</Link>
            </Button>
          </Grid>

        </Grid>
      </Container>
    );
  }
