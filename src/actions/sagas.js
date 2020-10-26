import { takeEvery, put } from 'redux-saga/effects'
import { SET_USER, GET_USER_DATA } from './authAction'
import { SUCCESS_AUTH } from './signInAction'
import { SET_MY_COMMENT, GET_COMMENTS, GET_COMMENTS_SUCCESS, SET_POST_COMMENT } from './commentsAction'
import { SET_MY_POST, GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_PROFILE } from './postAction'

export function* sagaWatcher() {
    yield takeEvery(SET_USER, fetchSignUp)
}

//Authorization (how change payload here and post it to store)

async function fetchSignUp(payload) {
  console.log(JSON.stringify(payload.payload))
        let requestOptions = {
          method: 'POST',
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(payload.payload),
          redirect: 'follow',
        };
        
          await fetch("http://localhost:8080/sign_up", requestOptions)
          window.location.href = '/signIn'
}

export function* sagaWatcherSign() {
   yield takeEvery(SUCCESS_AUTH, fetchSignIn)
} 

async function fetchSignIn(payload) {
        console.log(JSON.stringify(payload.payload))
        let requestOptions = {
          method: 'POST',
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(payload.payload)
        };

      let result = await fetch("http://localhost:8080/sign_in", requestOptions)
      if (result.headers.get('Authorization')!== null){
          localStorage.setItem('Authorization', result.headers.get('Authorization'));

          window.location.href = '/'
      } else 
      alert('Введи данные по человечески, я тебе как робот говорю')
  }


export function* sagaWatcherComment() {
  yield takeEvery(SET_MY_COMMENT, fetchComment)
}

async function fetchComment(payload) {

  const headers = {
    'Authorization' : localStorage.getItem('Authorization'),
    'Content-Type' : 'application/json'
}

let requestOptions = {
method: 'POST',
headers: headers,
redirect: 'follow',
body: JSON.stringify({
  "message": payload.payload.message,
	"postId": payload.payload.postId,
  "commentable_type": "Post"
}),
};

fetch("http://localhost:8080/comments", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
}

export function* sagaWatcherPost() {
  yield takeEvery(SET_MY_POST, fetchPost)
}

async function fetchPost(payload) {
  const headers = {
        'Authorization' : localStorage.getItem('Authorization'),
        'Content-Type' : 'application/json'
  }

  let requestOptions = {
    method: 'POST',
    headers: headers,
    redirect: 'follow',
    body: JSON.stringify(payload.payload),
  };
  
  fetch("http://localhost:8080/posts", requestOptions)
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
    'Authorization': localStorage.getItem('Authorization')
  } 
  let requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  const json = yield fetch("http://localhost:8080/posts", requestOptions)
  .then(response => response.json(), );

  yield put({ type: GET_POSTS_SUCCESS, json: json, });
}

//Get Comments

export function* getCommentsWatcher() {
  yield takeEvery(GET_COMMENTS, fetchAllComments)
}

function* fetchAllComments(payload) {

  let headers = {
    'Authorization': localStorage.getItem('Authorization')
}
let requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

const comments = yield fetch(`http://localhost:8080/comments/${payload.payload}`, requestOptions)
.then(response => response.json(), );

  yield put({ type: GET_COMMENTS_SUCCESS, comments: comments, });

const post = yield fetch(`http://localhost:8080/posts/${payload.payload}`, requestOptions)
.then(response => response.json(), )

yield put ({type: SET_POST_COMMENT, post: post})
}

//Posts profile

export function* getPostsProfileWatcher() {
  yield takeEvery(GET_POSTS_PROFILE, fetchAllProfilePosts)
}

function* fetchAllProfilePosts() {
let headers = {
 'Authorization': localStorage.getItem('Authorization')
} 
let requestOptions = {
 method: 'GET',
 headers: headers,
 redirect: 'follow'
};

const data = yield fetch("https://postify-api.herokuapp.com/users/me", requestOptions)
            .then(response => response.json(), )

const profilePosts = yield fetch("http://localhost:8080/posts", requestOptions)
    .then(response => response.json(), )

    let filter = profilePosts.filter(element => {
      return element.user_id === data.data.id
    })

yield put({ type: GET_USER_DATA, data: data })
yield put({ type: GET_POSTS_SUCCESS, json: filter, });
}