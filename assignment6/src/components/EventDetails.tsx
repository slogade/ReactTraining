import * as React from 'react'
var moment = require('moment')

export default class EventDetails extends React.Component<any, any> {  
  constructor(props: any) {
    super(props)
  }

  render() {
    let { event } = this.props.match.params
    const {title, startTime, endTime, details } = JSON.parse(event)

    return (
      <div className="event-form">
        <h1 className="heading">{title}</h1>

        <button onClick={() => history.back()}>Home</button>
        <div className="event-details">
          Date: {moment(new Date(startTime)).format('DD-MM-YYYY')}
          Time: {moment(new Date(startTime)).format('hh:mm a')} To {moment(new Date(endTime)).format('hh:mm a')}
        </div>
      </div>
    )
  }
}
