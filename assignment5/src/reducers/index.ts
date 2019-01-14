import * as todos from './todos'
import { combineReducers } from 'redux';

export interface State {
  todos: todos.State
}

export const initialState: State = {
  todos: todos.initialState
}

export const reducer = combineReducers<State> ({
  todos: todos.reducer
})