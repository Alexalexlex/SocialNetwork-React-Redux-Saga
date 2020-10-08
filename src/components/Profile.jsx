import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MenuNav from './MenuNav';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setPost, setMyPost } from '../actions/postAction'
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

        this.handleChange = this.handleChange.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick() {

        (Boolean(this.state.title && this.state.description)) ? this.props.setMyPostAction(this.state) : alert('Введи сраный заголовок и описание')
        this.setState({
            title: '',
            description: '',
        })
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    componentDidMount() {

        let headers = {
            'client': localStorage.getItem('client'),
            'uid': localStorage.getItem('uid'),
            'access-token': localStorage.getItem('access-token')
        }

        let requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };
          
          fetch("https://postify-api.herokuapp.com/users/me", requestOptions)
            .then(response => response.text())
            .then(result => this.setState({
                email : JSON.parse(result).data.uid,
                id: JSON.parse(result).data.id
            }))
            .catch(error => console.log('error', error));

            //Posts
        
        fetch("https://postify-api.herokuapp.com/posts", requestOptions)
            .then(response => response.text())
            .then(result => {
                JSON.parse(result).forEach(element => {
                        if (element.user_id === this.state.id) {
                            this.setState({
                               posts : [...this.state.posts, element]
                            })
                        }
                })
            })
            .catch(error => console.log('error', error));


    }

    render() {
        const { posts } = this.props
        const result = ([...this.state.posts, ...posts].length) ? (
            [...this.state.posts, ...posts].map((post) => {
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
                            email: {this.state.email}
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
        setPostAction: post => dispatch(setPost(post)),
        setMyPostAction: post => dispatch(setMyPost(post)),
    }
}

const mapStateToProps = store => {
    return {
        posts: store.posts,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(Profile))
