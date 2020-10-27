import { createStore, applyMiddleware,compose } from 'redux'
import { rootReducer } from '../reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher, sagaWatcherSign, sagaWatcherComment, sagaWatcherPost, getPostsWatcher, getCommentsWatcher,getPostsProfileWatcher, postDeleteWatcher, postEditWatcher } from '../actions/sagas'

const saga = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(saga)))

saga.run(sagaWatcher)
saga.run(sagaWatcherSign)
saga.run(sagaWatcherComment)
saga.run(sagaWatcherPost)
saga.run(getPostsWatcher)
saga.run(getCommentsWatcher)
saga.run(getPostsProfileWatcher)
saga.run(postDeleteWatcher)
saga.run(postEditWatcher)