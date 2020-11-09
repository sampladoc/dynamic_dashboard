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
    fontSize: "40px",
    fontFamily: "arial",
  },
}));



export default function Soon() {
  let classes = useStyles();
  localStorage.clear();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={require("../assets/user.png")} width="400" alt="img"></img>
          </Paper>
        </Grid>
        
            <Grid item xs={12}>
              <Paper className={classes.paperGeneric}>
                Coming Soon
              </Paper>
            </Grid>
      </Grid>
    </div >
  );
}

