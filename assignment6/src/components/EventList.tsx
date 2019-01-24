import * as React from 'react'
import Event from './../models/Event'
import { RemoveEventAction } from './../actions/events'
import { Link } from 'react-router-dom'

interface Props {
  selectedDateEvents: Event[],
  handleRemove: (id: number) => RemoveEventAction
}

interface State {
  date: Date
}

export default class EventList extends React.Component<Props, State> {
  getStyle: (event: Event) => React.CSSProperties = (event) => {
    const start = new Date(event.startTime)
    const end = new Date(event.endTime)
    const diff = (end.getTime() - start.getTime()) / 3600000

    let top = (start.getHours() + (start.getMinutes() / 60))
    let factor = 60

    if (top >= 16) {
      factor = 60.2
    } else if (top >= 12) {
      factor = 60.3
    } else if (top >= 8) {
      factor = 60.5
    } else if (top >= 4) {
      factor = 61
    } else if (top >= 3) {
      factor = 62
    } else {
      factor = 63
    }

    return {
      height: `${(diff >= 4 ? 60 : 58) * diff}px`,
      top: `${(factor * top) || 6}px`
    }
  }

  remove = (id: number, e: any) => {
    e.stopPropagation()

    const { handleRemove } = this.props
    let con = confirm('Are you surely want to delete this event?')

    if(con) {
      handleRemove(id)
    }
  }

  render() {
    const events = this.props.selectedDateEvents

    return (
      (events && events.length) ?
        <div className="event-list">
          {
            events.map(event =>
              <div key={event.id} className="event" style={this.getStyle(event)}>
                <Link to={`/details/${event.id}`}><span className="title">{event.title}</span></Link>
                <span className="duration">{event.startTime.slice(16, 21)} TO {event.endTime.slice(16, 21)}</span>
                <span className="edit-del">
                  <Link to={`/edit/${event.id}`}>edit</Link>
                  <button onClick={(e) => this.remove(event.id, e)}>X</button>
                </span>
              </div>
            )
          }
          <div className="calendar">
            <div className="time-container"><span>00 AM</span><div className="time"></div></div>
            <div className="time-container"><span>01 AM</span><div className="time"></div></div>
            <div className="time-container"><span>02 AM</span><div className="time"></div></div>
            <div className="time-container"><span>03 AM</span><div className="time"></div></div>
            <div className="time-container"><span>04 AM</span><div className="time"></div></div>
            <div className="time-container"><span>05 AM</span><div className="time"></div></div>
            <div className="time-container"><span>06 AM</span><div className="time"></div></div>
            <div className="time-container"><span>07 AM</span><div className="time"></div></div>
            <div className="time-container"><span>08 AM</span><div className="time"></div></div>
            <div className="time-container"><span>09 AM</span><div className="time"></div></div>
            <div className="time-container"><span>10 AM</span><div className="time"></div></div>
            <div className="time-container"><span>11 AM</span><div className="time"></div></div>
            <div className="time-container"><span>12 NN</span><div className="time"></div></div>
            <div className="time-container"><span>01 PM</span><div className="time"></div></div>
            <div className="time-container"><span>02 PM</span><div className="time"></div></div>
            <div className="time-container"><span>03 PM</span><div className="time"></div></div>
            <div className="time-container"><span>04 PM</span><div className="time"></div></div>
            <div className="time-container"><span>05 PM</span><div className="time"></div></div>
            <div className="time-container"><span>06 PM</span><div className="time"></div></div>
            <div className="time-container"><span>07 PM</span><div className="time"></div></div>
            <div className="time-container"><span>08 PM</span><div className="time"></div></div>
            <div className="time-container"><span>09 PM</span><div className="time"></div></div>
            <div className="time-container"><span>10 PM</span><div className="time"></div></div>
            <div className="time-container"><span>11 PM</span><div className="time"></div></div>
          </div>
        </div> :
        <div className="no-events">No Events</div>
    )
  }
}

