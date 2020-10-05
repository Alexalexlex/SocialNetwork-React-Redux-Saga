import { take } from 'redux-saga/effects'
import { SET_USER } from './authAction'

export function* sagaWatcher() {
    const payload = yield take(SET_USER)
    yield fetchSignUp(payload.payload)
    yield fetchSignIn(payload.payload)
}

//Authorization (how change payload here and post it to store)

async function fetchSignUp(payload) {
        let requestOptions = {
          method: 'POST',
          headers: payload,
          redirect: 'follow'
        };
        
          let result = await fetch("https://postify-api.herokuapp.com/auth", requestOptions)
          console.log(await result.headers.get('access-token'))

          localStorage.setItem('access-token', result.headers.get('access-token'));
          localStorage.setItem('client', result.headers.get('client'));
          localStorage.setItem('uid', result.headers.get('uid'));
          localStorage.setItem('email', payload.email);
          localStorage.setItem('password', payload.password);

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