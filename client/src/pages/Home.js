import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


function Home() {
  const handleButtonClick = () => {
    console.log("click")
  };
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

          <Grid item md={7} xs={6}
                className="search"
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch">
            <TextField variant="outlined" placeholder="Irvine, CA" className="search-bar"/>
          </Grid>

          <Grid item md={2} 
                className="search"
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
            <Button variant="contained" color="primary">
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