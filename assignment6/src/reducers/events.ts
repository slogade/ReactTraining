import Event from '../models/Event'
import { Action, ActionTypes } from '../actions/events'

export interface State {
  events: Event[]
}

export const initialState: State = {
  events: localStorage.getItem('event') ? JSON.parse(localStorage.getItem('event')) : [
    {
      "startTime": "Sun Jan 13 2019 01:00:00 GMT+0530 (IST)",
      "endTime": "Sun Jan 13 2019 01:30:00 GMT+0530 (IST)",
      "title": "Event 1",
      "id": 1
    },
    {
      "startTime": "Sun Jan 13 2019 04:00:00 GMT+0530 (IST)",
      "endTime": "Sun Jan 13 2019 06:00:00 GMT+0530 (IST)",
      "title": "Event 2",
      "id": 2
    },
    {
      "startTime": "Mon Jan 14 2019 20:00:00 GMT+0530 (IST)",
      "endTime": "Mon Jan 14 2019 21:30:00 GMT+0530 (IST)",
      "title": "Event 3",
      "id": 3
    },
    {
      "startTime": "Mon Jan 14 2019 21:30:00 GMT+0530 (IST)",
      "endTime": "Mon Jan 14 2019 22:15:00 GMT+0530 (IST)",
      "title": "Event 4",
      "id": 4
    },
    {
      "startTime": "Tue Jan 15 2019 02:00:00 GMT+0530 (IST)",
      "endTime": "Tue Jan 15 2019 03:00:00 GMT+0530 (IST)",
      "title": "Event 5",
      "id": 5
    },
    {
      "startTime": "Wed Jan 16 2019 01:30:00 GMT+0530 (IST)",
      "endTime": "Wed Jan 16 2019 02:00:00 GMT+0530 (IST)",
      "title": "Event 6",
      "id": 6
    },
    {
        "startTime": "Wed Jan 16 2019 05:30:00 GMT+0530 (IST)",
        "endTime": "Wed Jan 16 2019 06:00:00 GMT+0530 (IST)",
        "title": "Event 7",
        "id": 7
    },
    {
        "startTime": "Wed Jan 16 2019 00:00:00 GMT+0530 (IST)",
        "endTime": "Wed Jan 16 2019 00:45:00 GMT+0530 (IST)",
        "title": "Event 8",
        "id": 8
    },
    {
        "startTime": "Thu Jan 17 2019 21:30:00 GMT+0530 (IST)",
        "endTime": "Thu Jan 17 2019 23:00:00 GMT+0530 (IST)",
        "title": "Event 9",
        "id": 9
    },
    {
        "startTime": "Fri Jan 18 2019 12:00:00 GMT+0530 (IST)",
        "endTime": "Fri Jan 18 2019 12:45:00 GMT+0530 (IST)",
        "title": "Event 10",
        "id": 10
    },
    {
        "startTime": "Fri Jan 18 2019 00:30:00 GMT+0530 (IST)",
        "endTime": "Fri Jan 18 2019 02:30:00 GMT+0530 (IST)",
        "title": "Event 11",
        "id": 11
    },
    {
        "startTime": "Fri Jan 18 2019 02:00:00 GMT+0530 (IST)",
        "endTime": "Fri Jan 18 2019 03:30:00 GMT+0530 (IST)",
        "title": "Event 12",
        "id": 12
    },
    {
        "startTime": "Sat Jan 19 2019 05:00:00 GMT+0530 (IST)",
        "endTime": "Sat Jan 19 2019 06:00:00 GMT+0530 (IST)",
        "title": "Event 13",
        "id": 13
    },
    {
        "startTime": "Sat Jan 19 2019 08:00:00 GMT+0530 (IST)",
        "endTime": "Sat Jan 19 2019 08:30:00 GMT+0530 (IST)",
        "title": "Event 14",
        "id": 14
    },
    {
        "startTime": "Sat Jan 19 2019 12:30:00 GMT+0530 (IST)",
        "endTime": "Sat Jan 19 2019 12:45:00 GMT+0530 (IST)",
        "title": "Event 15",
        "id": 15
    },
    {
        "startTime": "Sat Jan 19 2019 06:00:00 GMT+0530 (IST)",
        "endTime": "Sat Jan 19 2019 07:00:00 GMT+0530 (IST)",
        "title": "Event 16",
        "id": 16
    },
    {
        "startTime": "Mon Jan 21 2019 00:30:00 GMT+0530 (IST)",
        "endTime": "Mon Jan 21 2019 01:00:00 GMT+0530 (IST)",
        "title": "Event 17",
        "id": 17
    },
    {
        "startTime": "Mon Jan 21 2019 05:30:00 GMT+0530 (IST)",
        "endTime": "Mon Jan 21 2019 06:15:00 GMT+0530 (IST)",
        "title": "Event 18",
        "id": 18
    },
    {
        "startTime": "Mon Jan 21 2019 13:00:00 GMT+0530 (IST)",
        "endTime": "Mon Jan 21 2019 15:00:00 GMT+0530 (IST)",
        "title": "Event 19",
        "id": 19
    },
    {
        "startTime": "Tue Jan 22 2019 05:30:00 GMT+0530 (IST)",
        "endTime": "Tue Jan 22 2019 06:00:00 GMT+0530 (IST)",
        "title": "Event 20",
        "id": 20
    },
    {
        "startTime": "Tue Jan 22 2019 08:30:00 GMT+0530 (IST)",
        "endTime": "Tue Jan 22 2019 10:30:00 GMT+0530 (IST)",
        "title": "Event 21",
        "id": 21
    },
    {
        "startTime": "Wed Jan 23 2019 16:00:00 GMT+0530 (IST)",
        "endTime": "Wed Jan 23 2019 17:30:00 GMT+0530 (IST)",
        "title": "Event 22",
        "id": 22
    },
    {
        "startTime": "Wed Jan 23 2019 11:00:00 GMT+0530 (IST)",
        "endTime": "Wed Jan 23 2019 13:00:00 GMT+0530 (IST)",
        "title": "Event 23",
        "id": 23
    },
    {
        "startTime": "Wed Jan 23 2019 00:00:00 GMT+0530 (IST)",
        "endTime": "Wed Jan 23 2019 00:45:00 GMT+0530 (IST)",
        "title": "Event 24",
        "id": 24
    },
    {
        "startTime": "Mon Jan 21 2019 21:00:00 GMT+0530 (IST)",
        "endTime": "Mon Jan 21 2019 23:00:00 GMT+0530 (IST)",
        "title": "Event 25",
        "id": 25
    },
    {
        "startTime": "Fri Jan 25 2019 01:30:00 GMT+0530 (IST)",
        "endTime": "Fri Jan 25 2019 02:15:00 GMT+0530 (IST)",
        "title": "Event 26",
        "id": 26
    },
    {
        "startTime": "Fri Jan 25 2019 13:30:00 GMT+0530 (IST)",
        "endTime": "Fri Jan 25 2019 14:30:00 GMT+0530 (IST)",
        "title": "Event 27",
        "id": 27
    },
    {
        "startTime": "Sat Jan 26 2019 12:00:00 GMT+0530 (IST)",
        "endTime": "Sat Jan 26 2019 12:15:00 GMT+0530 (IST)",
        "title": "Event 28",
        "id": 28
    },
    {
        "startTime": "Mon Jan 28 2019 06:30:00 GMT+0530 (IST)",
        "endTime": "Mon Jan 28 2019 07:15:00 GMT+0530 (IST)",
        "title": "Event 29",
        "id": 29
    },
    {
        "startTime": "Mon Jan 28 2019 06:00:00 GMT+0530 (IST)",
        "endTime": "Mon Jan 28 2019 07:30:00 GMT+0530 (IST)",
        "title": "Event 30",
        "id": 30
    }
  ]
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