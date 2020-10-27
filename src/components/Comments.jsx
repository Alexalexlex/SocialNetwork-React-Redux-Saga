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
import { setMyComment, getComments, deletePost, editPost } from '../actions/commentsAction'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

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
    },
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
            edit: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.handleChangeEdit = this.handleChangeEdit.bind(this);
    }

    onBtnClick(e) {
        e.preventDefault()

        const createComments = async () => {
            await this.props.setMyCommentAction(this.state)
            await this.props.getComments(this.state.postId)
        }
        createComments()
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
        this.props.getComments(this.state.postId)
    }

    deletePost() {
        this.props.deletePostAction(this.state.postId)
    }

    editPost() {
        if (this.state.edit){
            this.props.editPostAction({
                title: this.state.title,
                description: this.state.description,
                id: this.state.postId,
            })

            this.setState({
                edit: !this.state.edit
            })
        } else {
            this.setState({
                title: '',
                description: '',
                edit: !this.state.edit,
            })
        }   
    }

    handleChangeEdit(event) {
        const name = event.target.name;
        this.setState({
          [name]: event.target.value
        });
    }

    render() {
        const { comments, postin } = this.props
        const cutComments = comments.slice(0, 10)
        const result = (cutComments.length) ? (
            cutComments.map((comment) => {
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
                            {!this.state.edit && 
                            <>
                            <Typography variant="h5" gutterBottom>
                                {postin.title}
                            </Typography>
                            <Typography>
                                {postin.description}
                            </Typography>
                        </>
                            }
                            {this.state.edit &&
                                <>
                                <TextField
                                    value={this.state.title}
                                    name="title"
                                    onChange={this.handleChangeEdit}
                                    className={this.props.classes.input}
                                    label="Title"
                                    variant="outlined"
                                />
                                <TextField
                                    value={this.state.description}
                                    name="description"
                                    onChange={this.handleChangeEdit}
                                    className={this.props.classes.input}
                                    label="Description"
                                    variant="outlined"
                                />
                            </>
                            }
                        </Grid>
                        <Grid item>
                            <IconButton aria-label="delete" onClick={this.deletePost}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label="delete" onClick={this.editPost}>
                                <CreateIcon />
                            </IconButton>
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
        setMyCommentAction: comment => dispatch(setMyComment(comment)),
        getComments: (id) => dispatch(getComments(id)),
        deletePostAction: (id) => dispatch(deletePost(id)),
        editPostAction: (post) => dispatch(editPost(post)),
    }
}

const mapStateToProps = store => {
    return {
        comments: store.comments,
        postin: store.postin,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(Comments))
