import { combineReducers } from 'redux'
import * as selectedDateEvents from './selectedDateEvents'
import * as selectedEvent from './selectedEvent'

export interface State {
  selectedDateEvents: selectedDateEvents.State
  selectedEvent: selectedEvent.State
}

export const initialState: State = {
  selectedDateEvents: selectedDateEvents.initialState,
  selectedEvent: selectedEvent.initialState
}

export const reducer = combineReducers<State> ({
  selectedDateEvents: selectedDateEvents.selectedDateEventsReducer,
  selectedEvent: selectedEvent.selectedEventReducer
})