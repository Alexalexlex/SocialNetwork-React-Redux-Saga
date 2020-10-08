import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers/rootReducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher, sagaWatcherSign, sagaWatcherComment, sagaWatcherPost, getPostsWatcher } from '../actions/sagas'

const saga = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(logger, saga))

saga.run(sagaWatcher)
saga.run(sagaWatcherSign)
saga.run(sagaWatcherComment)
saga.run(sagaWatcherPost)
saga.run(getPostsWatcher)