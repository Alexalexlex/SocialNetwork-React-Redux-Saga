import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import MenuNav from './MenuNav';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setComment } from '../actions/commentsAction'
import { setMyComment } from '../actions/commentsAction'
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
    form: {
        width: '100%',
        marginLeft: '20%',
    }
};

class Comments extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            message: '',
            title: '',
            description: '',
            postId: window.location.pathname.substr(7),
            comments: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick(e) {
        e.preventDefault()
        this.props.setMyCommentAction(this.state)
        this.setState({
            message: '',
        })
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    componentDidMount() {
        //comments

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

        fetch(`https://postify-api.herokuapp.com/posts/${this.state.postId}/comments`, requestOptions)
            .then(response => response.text())
            .then(result => {
                JSON.parse(result).slice(0, 10).forEach(element => {
                    this.setState({
                        comments: [...this.state.comments, element]
                    })
                })
            })
            .catch(error => console.log('error', error));

        // Post

        fetch(`https://postify-api.herokuapp.com/posts/${this.state.postId}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({
                    title: JSON.parse(result).title,
                    description: JSON.parse(result).description
                })
            })
            .catch(error => console.log('error', error));
    }

    render() {
        const { comments } = this.props
        const result = ([...this.state.comments, ...comments].length) ? (
            [...this.state.comments, ...comments].map((comment) => {
                return (
                    <Paper className={this.props.classes.paper} key={Math.round(Date.now() * Math.random())}>
                        <Link to="#" className={this.props.classes.link}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" gutterBottom>
                                        {comment.message}
                                    </Typography>
                                    <Typography></Typography>
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
                                    No Comments
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
                <Paper className={this.props.classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h5" gutterBottom>
                                {this.state.title}
                            </Typography>
                            <Typography>
                                {this.state.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Grid
                    container
                    className={this.props.classes.grid}
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-end"
                    alignContent="center"
                >
                    <form className={this.props.classes.form} onSubmit={this.onBtnClick}>
                        <TextField
                            value={this.state.message}
                            name="message"
                            onChange={this.handleChange}
                            className={this.props.classes.input}
                            label="Comment"
                            variant="outlined"
                        />
                    </form>
                </Grid>
                {result}
            </div>
        );
    }
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => {
    return {
        setCommentAction: comment => dispatch(setComment(comment)),
        setMyCommentAction: comment => dispatch(setMyComment(comment)),
    }
}

const mapStateToProps = store => {
    return {
        comments: store.comments,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(Comments))
