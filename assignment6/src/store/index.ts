import { createStore } from 'redux'
import { State, reducer } from './../reducers'
import { Action } from '../actions/events'

const store = createStore<State, Action, {}, {}>(reducer)

export default store