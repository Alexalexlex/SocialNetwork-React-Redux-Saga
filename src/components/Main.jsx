import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import MenuNav from './MenuNav';
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';

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
        width: '80%',
        backgroundColor: 'white',
        marginTop: '1em',
    },
    link: {
        textDecoration: 'none',
        cursor: 'pointer',
    },
    button: {
        margin: theme.spacing(1),
        width: '10rem',
    },
    grid: {
        margin: `${theme.spacing(4)}px auto`,
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
            <MenuNav />
            <form>
            <Grid
                container
                className={classes.grid}
                direction="column"
                justify="flex-start"
                alignItems="flex-end"
                alignContent="center"
            >
                <TextField
                    className={classes.input}
                    label="Heading"
                    autoComplete="current-password"
                    variant="outlined"
                />
                <TextField
                    className={classes.input}
                    id="outlined-textarea"
                    label="Description"
                    multiline
                    variant="outlined"
                />
                <Grid item>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                    >
                        Send
                 </Button>
                </Grid>
            </Grid>
            </form>
            <Link to="#" className={classes.link}>
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
            </Link>
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