import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import { HeroHeader, SearchBar, SearchBarRefactor } from '../components/Home';
import { makeStyles } from '@material-ui/core/styles';

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
  Button: {
    borderRadius: "20px",
  },
  divider: {
    display: "",
      
  },
}));

function Home() {
  return (
   <body>
    <Navigation />

    <Container className="main" maxWidth="xl">

      <HeroHeader 
      header={"RoomUP"}
      subHeader={"Find your next place and roomate!"}
      />

      <SearchBar />
      
    </Container>
  </body> 
  );
}

export default Home;