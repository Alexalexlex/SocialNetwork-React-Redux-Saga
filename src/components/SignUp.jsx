import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setUser } from '../actions/authAction'
import { Link } from 'react-router-dom'
const classes = {
  paper: {
    marginTop: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '100px',
  },
  form: {
    width: '100%',
    marginTop: '1em',
  },
  submit: {
    margin: '1em',
  },
};

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleClick(e) {
    e.preventDefault()
      this.props.setAuthAction(this.state)
      this.signUp()
      this.signIn()
  }

  signUp() {
    let requestOptions = {
      method: 'POST',
      headers: this.state,
      redirect: 'follow'
    };
    
    fetch("https://postify-api.herokuapp.com/auth", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  signIn() {
    
    let headers = {email: this.state.email, password: this.state.password}
    
    let requestOptions = {
      method: 'POST',
      headers: headers,
      redirect: 'follow'
    };

    fetch("https://postify-api.herokuapp.com/auth/sign_in", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  render() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={this.props.classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={this.props.classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={this.handleInputChange}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
               onChange={this.handleInputChange}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={this.handleInputChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={this.handleInputChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            onClick={this.handleClick}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={this.props.classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
}

SignUp.propTypes = {
  user: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    setAuthAction: user => dispatch(setUser(user))
  }
}

const mapStateToProps = store => {
  return {
      user: store.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(SignUp))