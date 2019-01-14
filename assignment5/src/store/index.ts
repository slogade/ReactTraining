import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { State, reducer } from './../reducers'
import { Action } from '../actions/todos'

const store = createStore<State, Action, {}, {}>(reducer, applyMiddleware(logger))

export default store