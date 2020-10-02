import { take } from 'redux-saga/effects'
import { SET_USER } from './authAction'

export function* sagaWatcher() {
    const payload = yield take(SET_USER)
    yield fetchSignUp(payload.payload)
    yield fetchSignIn(payload.payload)
}

//Authorization (how change payload here and post it to store)

async function fetchSignUp(payload) {
        const requestOptions = {
          method: 'POST',
          headers: payload,
          redirect: 'follow'
        };
        
          const result = await fetch("https://postify-api.herokuapp.com/auth", requestOptions)
          console.log(await result.headers.get('access-token'))
}

async function fetchSignIn(payload) {    
        const headers = {email: payload.email, password: payload.password}
        
        const requestOptions = {
          method: 'POST',
          headers: headers,
          redirect: 'follow'
        };
    
        const result = fetch("https://postify-api.herokuapp.com/auth/sign_in", requestOptions)
        const params = await result.text()
        console.log(params)
}