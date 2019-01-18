import * as React from 'react'
import * as moment from 'moment'

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
