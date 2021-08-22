import React from 'react';
import Grid from '@material-ui/core/Grid';

function HeroHeader(props) {
    return (
        <Grid className="hero"
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
          <h1>{props.header}</h1>
          <p>{props.subHeader}</p>
        </Grid>
    );
}
  
export default HeroHeader;