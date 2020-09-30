import React from 'react';
import './App.css';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp';
import Main from './components/Main'
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return ( 
      <Router>
        <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={Main} />
      </Switch>
      </Router>
    );
  }
}

export default App