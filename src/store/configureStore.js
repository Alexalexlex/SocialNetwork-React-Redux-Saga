import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers/rootReducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from '../actions/sagas'

const saga = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(logger, saga))

saga.run(sagaWatcher)