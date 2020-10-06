import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import MenuNav from './MenuNav';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setPost } from '../actions/postAction'
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

class Main extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            description: '',
        }

        this.handleChange= this.handleChange.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
    }
    
    onBtnClick() {
        this.props.setPostAction(this.state)
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
          
          fetch("https://postify-api.herokuapp.com/posts", requestOptions)
            .then(response => response.text())
            .then(result => {
                JSON.parse(result).slice(0,10).forEach(element => {
                    this.props.setPostAction(element)
                });
            })
            .catch(error => console.log('error', error));


    }
    
    render() {
        const { posts } = this.props
        const result = (posts.length) ? (
            posts.map((post) => {
                return(
                    <Paper className={this.props.classes.paper} key={Math.round(Date.now()*Math.random())}>
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
                    <Grid
                        container
                        className={this.props.classes.grid}
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-end"
                        alignContent="center"
                    >
                        <TextField
                            value={this.state.title}
                            name="title"
                            onChange={this.handleChange}
                            className={this.props.classes.input}
                            label="Title"
                            variant="outlined"
                        />
                        <TextField
                            value={this.state.description}
                            name="description"
                            onChange={this.handleChange}
                            className={this.props.classes.input}
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
                {result}
            </div>
        );
    }
}

Main.propTypes = {
    posts: PropTypes.array.isRequired,
  }

  const mapDispatchToProps = dispatch => {
    return {
      setPostAction: post => dispatch(setPost(post))
    }
  }

const mapStateToProps = store => {
    return {
        posts: store.posts,

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(Main))
