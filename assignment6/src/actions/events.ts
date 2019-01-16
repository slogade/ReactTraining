import Event from './../models/Event'

export enum ActionTypes {
  GET_EVENTS = '[events] GET_EVENTS',
  ADD_EVENT = '[events] ADD_EVENT',
  EDIT_EVENT = '[events] EDIT_EVENT',
  REMOVE_EVENT = '[events] REMOVE_EVENT'
}

export interface GetEventsAction {
  type: ActionTypes.GET_EVENTS,
  payload: {date: Date}
}

export interface AddEventAction {
  type: ActionTypes.ADD_EVENT,
  payload: {event: Event}
}

export interface EditEventAction {
  type: ActionTypes.EDIT_EVENT,
  payload: {event: Event}
}

export interface RemoveEventAction {
  type: ActionTypes.REMOVE_EVENT,
  payload: {eventId: number}
}

export function getEvents(date: Date): GetEventsAction {
  console.log(date)
  return {
    type: ActionTypes.GET_EVENTS,
    payload: { date }
  }
}

export function addEvent(title: string, startTime: string, endTime: string): AddEventAction {
  return {
    type: ActionTypes.ADD_EVENT,
    payload: {
      event: {
        id: new Date().getTime(),
        title,
        startTime,
        endTime
      }
    }
  }
}

export function EditEvent(event: Event): EditEventAction {
  return {
    type: ActionTypes.EDIT_EVENT,
    payload: { event }
  }
}

export function removeEvent(eventId: number): RemoveEventAction {
  return {
    type: ActionTypes.REMOVE_EVENT,
    payload: { eventId }
  }
}

export type Action = GetEventsAction | AddEventAction | EditEventAction | RemoveEventAction