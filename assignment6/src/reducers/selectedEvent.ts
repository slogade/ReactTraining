import Event from '../models/Event'
import { ActionTypes, Action } from '../actions/events'

export interface State {
  selectedEvent: Event
}

export const initialState: State = {
  selectedEvent: null
}

export function selectedEventReducer(state: State = initialState, action: Action) {
  switch(action.type) {
    case ActionTypes.GET_EVENT: {
      return { selectedEvent: action.payload.event}
    }

    default:
      return state
  }
}