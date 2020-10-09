import { takeEvery, put } from 'redux-saga/effects'
import { SET_USER } from './authAction'
import { SUCCESS_AUTH } from './signInAction'
import { SET_MY_COMMENT, GET_COMMENTS, GET_COMMENTS_SUCCESS, SET_POST_COMMENT } from './commentsAction'
import { SET_MY_POST, GET_POSTS, GET_POSTS_SUCCESS } from './postAction'

export function* sagaWatcher() {
    yield takeEvery(SET_USER, fetchSignUp)
}

//Authorization (how change payload here and post it to store)

async function fetchSignUp(payload) {
        let requestOptions = {
          method: 'POST',
          headers: payload.payload,
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
	"commentable_id": payload.payload.postId,
  "commentable_type": "Post"
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
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log('error', error));
}

//Get Posts

export function* getPostsWatcher() {
     yield takeEvery(GET_POSTS, fetchAllPosts)
}

function* fetchAllPosts() {
  let headers = {
    'client': localStorage.getItem('client'),
    'uid': localStorage.getItem('uid'),
    'access-token': localStorage.getItem('access-token')
  } 
  let requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  const json = yield fetch("https://postify-api.herokuapp.com/posts", requestOptions)
  .then(response => response.json(), );

  yield put({ type: GET_POSTS_SUCCESS, json: json, });
}

//Get Comments

export function* getCommentsWatcher() {
  yield takeEvery(GET_COMMENTS, fetchAllComments)
}

function* fetchAllComments(payload) {

  let headers = {
    'client': localStorage.getItem('client'),
    'uid': localStorage.getItem('uid'),
    'access-token': localStorage.getItem('access-token')
}
let requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

const comments = yield fetch(`https://postify-api.herokuapp.com/posts/${payload.payload}/comments`, requestOptions)
.then(response => response.json(), );

  yield put({ type: GET_COMMENTS_SUCCESS, comments: comments, });

const post = yield fetch(`https://postify-api.herokuapp.com/posts/${payload.payload}`, requestOptions)
.then(response => response.json(), )

yield put ({type: SET_POST_COMMENT, post: post})
}