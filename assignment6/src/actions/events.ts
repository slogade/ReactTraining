import Event from './../models/Event'

export enum ActionTypes {
  GET_SELECTED_DATE_EVENTS = '[events] GET_SELECTED_DATE_EVENTS',
  GET_EVENT = '[events] GET_EVENT',
  ADD_EVENT = '[events] ADD_EVENT',
  EDIT_EVENT = '[events] EDIT_EVENT',
  REMOVE_EVENT = '[events] REMOVE_EVENT'
}

export interface GetSelectedDateEventsAction {
  type: ActionTypes.GET_SELECTED_DATE_EVENTS,
  payload: {events: Event[]}
}

export interface GetEventAction {
  type: ActionTypes.GET_EVENT,
  payload: {event: Event}
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
  payload: {id: number}
}

export function getSelectedDateEvents(date: string): GetSelectedDateEventsAction {
  const allEvents = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []
  let events = allEvents.filter((event: Event) => event.startTime.slice(0, 15) == date)
  
  return {
    type: ActionTypes.GET_SELECTED_DATE_EVENTS,
    payload: { events }
  }
}

export function getEvent(id: number): GetEventAction {
  const allEvents = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []

  let event = allEvents.filter((event: Event) => event.id == id)

  return {
    type: ActionTypes.GET_EVENT,
    payload: { event: event[0] }
  }
}

export function addEvent(event: Event): AddEventAction {
  const allEvents = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []
  allEvents.push(event)
  localStorage.setItem('events', JSON.stringify(allEvents))

  return {
    type: ActionTypes.ADD_EVENT,
    payload: { event }
  }
}

export function editEvent(event: Event): EditEventAction {
  const allEvents = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []
  let events = allEvents.map((ev: Event) => ev.id == event.id ? {...event} : ev)
  localStorage.setItem('events', JSON.stringify(events))

  return {
    type: ActionTypes.EDIT_EVENT,
    payload: { event }
  }
}

export function removeEvent(id: number): RemoveEventAction {
  const allEvents = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []

  let events = allEvents.filter((event: Event) => event.id !== id)
  localStorage.setItem('events', JSON.stringify(events))

  return {
    type: ActionTypes.REMOVE_EVENT,
    payload: { id }
  }
}

export type Action = GetSelectedDateEventsAction | GetEventAction | AddEventAction | EditEventAction | RemoveEventAction