import Event from '../models/Event'
import { ActionTypes, Action } from '../actions/events'

export interface State {
    selectedDateEvents: Event[]
}

export const initialState: State = {
    selectedDateEvents: []
}

export function selectedDateEventsReducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.GET_SELECTED_DATE_EVENTS: {
            return { selectedDateEvents: action.payload.events }
        }

        case ActionTypes.ADD_EVENT: {
            return { selectedDateEvents: [...state.selectedDateEvents, action.payload.event] }
        }

        case ActionTypes.EDIT_EVENT: {
            let { event } = action.payload
            let events = state.selectedDateEvents.map((ev: Event) => ev.id == event.id ? { ...event } : ev)
            return { selectedDateEvents: [...events] }
        }

        case ActionTypes.REMOVE_EVENT: {
            const events = state.selectedDateEvents.filter(event => event.id !== action.payload.id)
            return { selectedDateEvents: events }
        }

        default:
            return state
    }
}