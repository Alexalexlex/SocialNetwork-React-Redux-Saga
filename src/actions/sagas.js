import { take } from 'redux-saga/effects'
import { SET_USER } from './authAction'
import { SUCCESS_AUTH } from './signInAction'

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
        
          await fetch("https://postify-api.herokuapp.com/auth", requestOptions)
          window.location.href = '/signIn'
}

export function* sagaWatcherSign() {
  const payload = yield take(SUCCESS_AUTH)
  yield fetchSignIn(payload)
} 

async function fetchSignIn(payload) {   
console.log(payload.payload)
        
        let requestOptions = {
          method: 'POST',
          headers: payload.payload,
          redirect: 'follow'
        };
    
        let result = await fetch("https://postify-api.herokuapp.com/auth/sign_in", requestOptions)


          localStorage.setItem('access-token', result.headers.get('access-token'));
          localStorage.setItem('client', result.headers.get('client'));
          localStorage.setItem('uid', result.headers.get('uid'));

          window.location.href = '/main'
}