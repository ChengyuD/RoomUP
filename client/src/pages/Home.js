import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import { useState } from 'react'
import Navigation from '../components/Navigation'


function Home() {

  const [searchValue, setSearchValue] = React.useState('');
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    setType(event.target.value);
    console.log(event.target.value);
  };


  return (
   <body>
    <Navigation />
    
    <Container className="main" maxWidth="xl">
      
      <Grid className="hero"
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
      >
        <h1>RoomUP</h1>
        <p>Find your next place and roomate!</p>
      </Grid>
      <Container>
        <Grid className="inner" container spacing={2}>
          <Grid item md={3} xs={6}
                className="search"
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
            <h4>Where are you looking to live?</h4>
          </Grid>


          {/* Input field for location */}
          <Grid item md={4} xs={6}
                className="search"
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                >
            <TextField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} variant="filled" placeholder="Irvine, CA" className="search-bar" id="searchtext" />
          </Grid>

          {/* Dropdown for housing type */}
          <Grid item md={1} xs={6}
                className="search"
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch">
            <Select
                  labelId="demo-simple-select-label"
                  value={type}
                  onChange={handleChange}
                >
                  <MenuItem value={"apartment"}>Apartment</MenuItem>
                  <MenuItem value={"condo"}>Condo</MenuItem>
                  <MenuItem value={"house"}>House</MenuItem>
                </Select>
          </Grid>

          {/* Search Button */}
          <Grid item md={2} 
                className="search"
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
            <Button to="/searchPage" variant="contained" color="primary" onClick={handleChange}>
                Search
            </Button> 
          </Grid>
        </Grid>
      </Container>
    </Container>
  </body> 
  );
}

export default Home;