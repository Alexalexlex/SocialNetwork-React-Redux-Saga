import React from 'react';
import './App.css';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp';
import Main from './components/Main'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return ( 
      <>
      <Main id={this.props.id} />
      </>
    );
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    id: store.user.id,
  }
}

export default connect(mapStateToProps)(App)