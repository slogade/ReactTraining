import * as React from 'react'
import * as moment from 'moment'

export default class EventDetails extends React.Component<any, any> {  
  constructor(props: any) {
    super(props)
  }

  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.getEvent(this.props.match.params.id)
    }
  }

  render() {
    if (this.props.selectedEvent) {
      var { title, startTime, endTime, details } = this.props.selectedEvent
    } else {
      return <div className="no-events">No Event</div>
    }

    return (
      <div className="event-form">
        <h1 className="heading">{title}</h1>

        <button className="cancle" onClick={() => history.back()}>{`Home`}</button>
        <div className="content">
          <div className="row">Date: <span>{moment(new Date(startTime)).format('DD-MM-YYYY')}</span></div>
          <div className="row">Time: <span>{moment(new Date(startTime)).format('hh:mm a')} To {moment(new Date(endTime)).format('hh:mm a')}</span></div>
          <div className="row">Details: <span>{details}</span></div>
        </div>
      </div>
    )
  }
}
