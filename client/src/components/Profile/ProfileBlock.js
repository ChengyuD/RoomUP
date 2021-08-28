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
    marginLeft: "30px"
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


  export default function ProfileBlock(props) {
    const classes = useStyles();
    // const [type, setType] = React.useState('');
    //   const handleChange = (event) => {
    //   setSearchValue(searchValue);
    //   setType(event.target.value);
    //   console.log(event.target.value);
    // };

    // const [searchValue, setSearchValue] = React.useState('');
    // const handleClick = (event) => {
    //   event.preventDefault();
    //   console.log(searchValue);
    //   console.log(type)
    // }
  
    return (
      <Container className={classes.wrapper} spacing={0}>
        <Grid spacing={2}container>
          
          <Grid item md={6} sm={6} xs={12}
          className={classes.description}
          container
          direction="column"
          justifyContent="center"
          alignItems="left">
            <h2>Name: {props.name}</h2>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
            <p>Budget: ${props.price}</p>
            
          </Grid>


          <Grid><Divider orientation="vertical" /></Grid>


          <Grid item md={5} sm={5} xs={12}
          className={classes.description}
          container
          direction="column"
          justifyContent="center"
          alignItems="left">
            <p>Bookmarks: {props.bookmarks}</p>
            <p>Roomies: {props.roomies}</p>
          </Grid>

        </Grid>
      </Container>
    );
  }