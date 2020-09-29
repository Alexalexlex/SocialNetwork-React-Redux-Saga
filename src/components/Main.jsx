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
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setPost } from '../actions/postAction'


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

class Main extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            description: '',
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
    }
    
    onBtnClick() {
        this.props.setPostAction(this.state)
    }

    handleTitle(e) {
        e.preventDefault()
        this.setState({title: e.target.value})
    }

    handleDescription(e) {
        e.preventDefault()
        this.setState({description: e.target.value})
    }
    
    render() {
        const { title, description, posts } = this.props
        const result = (posts.length) ? (
            posts.map((post) => {
                return(
                    <Paper className={this.props.classes.paper}>
                    <Link to="#" className={this.props.classes.link}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography>{post.description}</Typography>
                            </Grid>
                        </Grid>
                        </Link>
                    </Paper>
                )
            })
        ) : (
            <Paper className={this.props.classes.paper}>
                    <Link to="#" className={this.props.classes.link}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" gutterBottom>
                                    No Posts
                                </Typography>
                                <Typography></Typography>
                            </Grid>
                        </Grid>
                        </Link>
                    </Paper>
        )
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
                            onChange={this.handleTitle}
                            className={this.props.classes.input}
                            label="Title"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        <TextField
                            onChange={this.handleDescription}
                            className={this.props.classes.input}
                            autoComplete="current-password"
                            label="Description"
                            variant="outlined"
                        />
                        <Grid item>
                            <Button
                                onClick={this.onBtnClick}
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
                {result}
            </div>
        );
    }
}

Main.propTypes = {
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  const mapDispatchToProps = dispatch => {
    return {
      setPostAction: post => dispatch(setPost(post))
    }
  }

const mapStateToProps = store => {
    console.log(store)
    return {
        posts: store.posts,
        title: store.posts.title,
        description: store.posts.description,

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(Main))
