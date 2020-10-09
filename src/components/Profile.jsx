import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MenuNav from './MenuNav';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPostsProfile } from '../actions/postAction'
import { Link } from 'react-router-dom'

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

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            email: '',
            id: ''
        }
    }

    componentDidMount() {
        this.props.getPostsProfile()
    }

    render() {
        const { posts, user } = this.props
        const cutPosts = posts.slice(0,10)
        const result = (cutPosts.length) ? (
            cutPosts.map((post) => {
                return (
                    <Paper className={this.props.classes.paper} key={Math.round(Date.now() * Math.random())}>
                        <Link to={`/posts/${post.id}`} className={this.props.classes.link}>
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
                <Grid
                    container
                    className={this.props.classes.grid}
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    alignContent="center"
                >
                    <Grid item>
                        <Avatar>W</Avatar>
                    </Grid>
                    <br/>
                    <Grid item>
                        <Typography variant="h6" gutterBottom>
                            Your name
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" gutterBottom>
                            Your surname
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" gutterBottom>
                            email: {user.uid}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" gutterBottom>
                            User Id: {user.id}
                        </Typography>
                    </Grid>
                </Grid>
                {result}
            </div>
        );
    }
}

Profile.propTypes = {
    posts: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => {
    return {
        getPostsProfile: () => dispatch(getPostsProfile()),
    }
}

const mapStateToProps = store => {
    return {
        posts: store.posts,
        user: store.user,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(Profile))
