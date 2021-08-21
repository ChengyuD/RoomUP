import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import { useState } from 'react'


function Home() {
  const handleButtonClick = () => {
    console.log("click")
  };

  const [searchValue, setSearchValue] = useState('');


  return (
   <body>

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
            <p>Where are you looking to live?</p>
          </Grid>

          <Grid item md={4} xs={6}
                className="search"
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch">
            <TextField variant="filled" placeholder="Irvine, CA" className="search-bar"/>
          </Grid>

          <Grid item md={1} xs={6}
                className="search"
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch">
            <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="Type of housing"
                  onChange={() => console.log("something")}
                >
                  <MenuItem value={"apartment"}>Apartment</MenuItem>
                  <MenuItem value={"condo"}>Condo</MenuItem>
                  <MenuItem value={"house"}>House</MenuItem>
                </Select>
          </Grid>

          <Grid item md={2} 
                className="search"
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
            <Button variant="contained" color="primary" onClick={() => console.log("click")}>
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