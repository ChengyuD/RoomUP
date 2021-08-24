import React from 'react';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
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