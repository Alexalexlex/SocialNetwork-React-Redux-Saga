import { take } from 'redux-saga/effects'
import { SET_USER } from './authAction'

export function* sagaWatcher() {
    const payload = yield take(SET_USER)
    yield fetchSignUp(payload.payload)
    yield fetchSignIn(payload.payload)
}

//Authorization

async function fetchSignUp(payload) {
        let requestOptions = {
          method: 'POST',
          headers: payload,
          redirect: 'follow'
        };
        
        fetch("https://postify-api.herokuapp.com/auth", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
}

async function fetchSignIn(payload) {    
        let headers = {email: payload.email, password: payload.password}
        
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