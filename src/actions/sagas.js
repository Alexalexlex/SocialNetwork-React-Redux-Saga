import { take,takeEvery } from 'redux-saga/effects'
import { SET_USER } from './authAction'
import { SUCCESS_AUTH } from './signInAction'
import { SET_MY_COMMENT } from './commentsAction'
import { SET_MY_POST } from './postAction'

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
   yield takeEvery(SUCCESS_AUTH, fetchSignIn)
} 

async function fetchSignIn(payload) {
        
        let requestOptions = {
          method: 'POST',
          headers: payload.payload,
          redirect: 'follow'
        };

      let result = await fetch("https://postify-api.herokuapp.com/auth/sign_in", requestOptions)
      if (result.headers.get('access-token')!== null){
          localStorage.setItem('access-token', result.headers.get('access-token'));
          localStorage.setItem('client', result.headers.get('client'));
          localStorage.setItem('uid', result.headers.get('uid'));

          window.location.href = '/'
      } else 
      alert('Введи данные по человечески, я тебе как робот говорю')
  }


export function* sagaWatcherComment() {
  yield takeEvery(SET_MY_COMMENT, fetchComment)
}

async function fetchComment(payload) {
  console.log(payload.payload.message)
  const headers = {
    'access_token' : localStorage.getItem('access-token'),
    'client' : localStorage.getItem('client'),
    'uid' : localStorage.getItem('uid'),
    'Content-Type' : 'application/json'
}

let requestOptions = {
method: 'POST',
headers: headers,
redirect: 'follow',
body: JSON.stringify({
  "message": payload.payload.message,
	"commentable_id": 477,
  "commentable_type": "Comment"
}),
};

fetch("https://postify-api.herokuapp.com/comments", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
}

export function* sagaWatcherPost() {
  yield takeEvery(SET_MY_POST, fetchPost)
}

async function fetchPost(payload) {

  const headers = {
        'access_token' : localStorage.getItem('access-token'),
        'client' : localStorage.getItem('client'),
        'uid' : localStorage.getItem('uid'),
        'Content-Type' : 'application/json'
  }

  let requestOptions = {
    method: 'POST',
    headers: headers,
    redirect: 'follow',
    body: JSON.stringify(payload.payload),
  };
  
  fetch("https://postify-api.herokuapp.com/posts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

// await fetch("https://postify-api.herokuapp.com/auth/sign_in", requestOptions)
//         .then(response => {
//           response.text()
//           localStorage.setItem('access-token', response.headers.get('access-token'));
//           localStorage.setItem('client', response.headers.get('client'));
//           localStorage.setItem('uid', response.headers.get('uid'));
//         })
//             .then(result => {
//               console.log(result)
//               // window.location.href = '/'
//                 })
//         .catch (error => console.log('error', error))
       