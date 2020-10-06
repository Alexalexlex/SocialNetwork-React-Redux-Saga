import React from 'react';
import './App.css';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp';
import Main from './components/Main'
import Comments from './components/Comments'
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';

class App extends React.Component {
constructor(props){
  super(props)

  this.state= this.isUserLoggined()
}
    isUserLoggined = () => {
    return Boolean(
      localStorage.getItem('access-token') &&
      localStorage.getItem('uid') &&
      localStorage.getItem('client')
    );

  }
  render() {
    return ( 
      <Router>
        <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/posts/:id" component={Comments} />
      </Switch>
      </Router>
    );
  }
}

export default App