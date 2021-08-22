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