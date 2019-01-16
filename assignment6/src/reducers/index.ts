import * as events from './events'
import { combineReducers } from 'redux';

export interface State {
  events: events.State
}

export const initialState: State = {
  events: events.initialState
}

export const reducer = combineReducers<State> ({
  events: events.reducer
})