import Event from '../models/Event'
import { Action, ActionTypes } from '../actions/events'

export interface State {
  events: Event[]
}

export const initialState: State = {
  events: localStorage.getItem('event') ? JSON.parse(localStorage.getItem('event')) : []
}

export function reducer(state: State = initialState, action: Action) {
  switch(action.type) {
    case ActionTypes.GET_EVENT: {
      const { id } = action.payload
      const event = state.events.filter(event => event.id === id)

      return { ...state, event }
    }

    case ActionTypes.ADD_EVENT: {
      const event = action.payload.event
      const events = [...state.events, event]

      localStorage.setItem('event', JSON.stringify(events))
      return { ...state, events }
    }

    case ActionTypes.EDIT_EVENT: {
      const { event } = action.payload
      const events = state.events.map(evnt => evnt.id === event.id ? {...event} : evnt)
      
      localStorage.setItem('event', JSON.stringify(events))
      return { ...state, events }
    }

    case ActionTypes.REMOVE_EVENT: {
      const { eventId } = action.payload
      const events = state.events.filter(event => event.id !== eventId)

      localStorage.setItem('event', JSON.stringify(events))
      return { ...state, events }
    }

    default:
      return state
  }
}