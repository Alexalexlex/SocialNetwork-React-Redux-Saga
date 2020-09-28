import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import MenuNav from './MenuNav';
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';

const classes = {
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    paper: {
        maxWidth: '80%',
        margin: `10px auto`,
        padding: '1rem',
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
        margin: '1rem',
        width: '10rem',
    },
    grid: {
        margin: `10px auto`,
    },
};



const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Omnis explicabo maxime atque perferendis optio, laboriosam culpa odio ad consequatur neque odit laudantium,
corporis nobis, sit aut assumenda doloribus cumque beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Omnis explicabo maxime atque perferendis optio, laboriosam culpa odio ad consequatur neque odit laudantium, corporis nobis,
sit aut assumenda doloribus cumque beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis explicabo maxime atque perferendis optio, 
laboriosam culpa odio ad consequatur neque odit laudantium, corporis nobis, sit aut assumenda doloribus cumque beatae.Lorem ipsum dolor sit, amet consectetur 
adipisicing elit. Omnis explicabo maxime atque perferendis optio, laboriosam culpa odio ad consequatur neque odit laudantium, corporis nobis, 
sit aut assumenda doloribus cumque beatae.`;

class Main extends React.Component {

    render() {
        return (
            <div className={this.props.classes.root}>
                <MenuNav />
                <form>
                    <Grid
                        container
                        className={this.props.classes.grid}
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-end"
                        alignContent="center"
                    >
                        <TextField
                            className={this.props.classes.input}
                            label="Heading"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        <TextField
                            className={this.props.classes.input}
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
                                className={this.props.classes.button}
                                endIcon={<Icon>send</Icon>}
                            >
                                Send
                 </Button>
                        </Grid>
                    </Grid>
                </form>
                    <Paper className={this.props.classes.paper}>
                    <Link to="#" className={this.props.classes.link}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" gutterBottom>
                                    {this.props.id}
                                </Typography>
                                <Typography>{message}</Typography>
                            </Grid>
                        </Grid>
                        </Link>
                    </Paper>
                    <Paper className={this.props.classes.paper}>
                    <Link to="#" className={this.props.classes.link}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" gutterBottom>
                                    {this.props.id}
                                </Typography>
                                <Typography>{message}</Typography>
                            </Grid>
                        </Grid>
                        </Link>
                    </Paper>
                    <Paper className={this.props.classes.paper}>
                    <Link to="#" className={this.props.classes.link}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" gutterBottom>
                                    {this.props.id}
                                </Typography>
                                <Typography>{message}</Typography>
                            </Grid>
                        </Grid>
                        </Link>
                    </Paper>
                    <Paper className={this.props.classes.paper}>
                    <Link to="#" className={this.props.classes.link}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" gutterBottom>
                                    {this.props.id}
                                </Typography>
                                <Typography>{message}</Typography>
                            </Grid>
                        </Grid>
                        </Link>
                    </Paper>
            </div>
        );
    }
}

export default withStyles(classes)(Main)
