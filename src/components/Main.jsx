import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import MenuNav from './MenuNav';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  paper: {
    maxWidth: '80%',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  input: {
      width:'80%',
      margin: `${theme.spacing(4)}px 10%`,
      backgroundColor: 'white',
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Omnis explicabo maxime atque perferendis optio, laboriosam culpa odio ad consequatur neque odit laudantium,
corporis nobis, sit aut assumenda doloribus cumque beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Omnis explicabo maxime atque perferendis optio, laboriosam culpa odio ad consequatur neque odit laudantium, corporis nobis,
sit aut assumenda doloribus cumque beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis explicabo maxime atque perferendis optio, 
laboriosam culpa odio ad consequatur neque odit laudantium, corporis nobis, sit aut assumenda doloribus cumque beatae.Lorem ipsum dolor sit, amet consectetur 
adipisicing elit. Omnis explicabo maxime atque perferendis optio, laboriosam culpa odio ad consequatur neque odit laudantium, corporis nobis, 
sit aut assumenda doloribus cumque beatae.`;

export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuNav/>
      <TextField
      className={classes.input}
      id="outlined-textarea"
      label="Multiline Placeholder"
      multiline
      variant="outlined"
      />
     <a href="#">
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      </a>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item xs>
          <Typography>{message}</Typography>
        </Grid>
      </Grid>
    </Paper>
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item xs>
          <Typography>{message}</Typography>
        </Grid>
      </Grid>
    </Paper>
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item xs>
          <Typography>{message}</Typography>
        </Grid>
      </Grid>
    </Paper>
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item xs>
          <Typography>{message}</Typography>
        </Grid>
      </Grid>
    </Paper>
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item xs>
          <Typography>{message}</Typography>
        </Grid>
      </Grid>
    </Paper>
    </div>
  );
}