import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import citySchema from '../data/citySchema';


let useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    background: "#ffffff",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperGeneric: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundImage: 'url(' + require("../assets/washington_county.jpg") + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  paperBellevue: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundImage: 'url(' + require("../assets/bellevue.jpg") + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}));



export default function Home() {
  let classes = useStyles();
  const onClick = (e) => {
    localStorage.clear();
    localStorage.setItem('view', e);
    if(!citySchema['city'][e]){
      window.location.href = "/soon"
    }else
    if(localStorage.getItem('view') === e){
      window.location.href = "/dashboard"
    }
    //
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={require("../assets/user.png")} width="200" alt="img"></img>
          </Paper>
        </Grid>
        {
          /* Loops through cities in schema to load city names and images. */
          citySchema.cities.map((city,i) => (
            <Grid item xs={3}>
              <Paper className={classes.paperGeneric} style={{backgroundImage:'url(' + require("../assets/" + city.image) + ')'}}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  component={Link}
                  onClick={() => onClick(city.name)}
                  value="data"
                >
                  {city.name}
            </Button>
              </Paper>
            </Grid>
          ))
        }
      </Grid>
    </div >
  );
}

