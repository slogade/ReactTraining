import * as React from 'react'
import { FormEvent } from 'react'
import * as moment from 'moment'

import Event from './../models/Event';

interface Props {
  selectedEvent: Event,
  getEvent: Function,
  handleAdd: Function,
  handleEdit: Function,
  match: any
}

interface State {
  date: Date,
  id: number,
  title: string,
  startTime: string,
  endTime: string,
  details: string
}

export default class AddEditEvent extends React.Component<Props, State> {  
  constructor(props: Props) {
    super(props)

    let { date } = this.props.match.params

    if (date) {
      date = new Date(date)
    }

    this.state = {
      date: date ? date : new Date(),
      id: null,
      title: '',
      startTime: '',
      endTime: '',
      details: ''
    }
  }

  componentDidMount = () => {
    const { getEvent } = this.props
    const { id } = this.props.match.params
    
    if (id) {
      getEvent(id)
    }
  }

  componentDidUpdate = (prevProps: Props) => {
    let { selectedEvent } = this.props

    if (this.props.match.params.id && selectedEvent &&(this.state.id !== selectedEvent.id)) {
      this.setState({
        date: new Date(selectedEvent.startTime),
        id: selectedEvent.id,
        title: selectedEvent.title,
        startTime: selectedEvent.startTime.slice(16, 21),
        endTime: selectedEvent.endTime.slice(16, 21),
        details: selectedEvent.details || ''
      })
    }
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { handleAdd, handleEdit } = this.props
    let event
    
    if (this.state.startTime && this.state.endTime && this.state.title) {
      let startTime: any = this.state.startTime.split(':').map(hr => parseInt(hr))
      let endTime: any = this.state.endTime.split(':').map(hr => parseInt(hr))

      startTime = new Date(this.state.date).setHours(startTime[0], startTime[1], 0)
      endTime = new Date(this.state.date).setHours(endTime[0], endTime[1], 0)

      if(startTime > endTime) {
        alert('Invalid duration!')
        return false
      }

      event = {
        id: this.state.id || new Date().getTime(),
        title: this.state.title,
        startTime: new Date(startTime).toString(),
        endTime: new Date(endTime).toString(),
        details: this.state.details
      }
    } else {
      alert('All fields are mandatory')
      return false
    }

    if (this.state.id) {
      handleEdit(event)
    } else {
      handleAdd(event)
    }
    window.history.back()
  }

  render() {
    const { id, title, startTime, endTime, details, date } = this.state

    if(this.props.match.params.id && !id) {
      return (
        <div>
          <button type="button" className="cancle" onClick={() => history.back()}>Back</button>
          <div className="no-events">Invalid Event Id!</div>
        </div>
      )
    }

    return (
      <div className="event-form">
        <h1 className="heading">{this.props.match.params.id ? 'Edit' : 'Create'} Event</h1>
        <h2>Date: {moment(date).format("DD MMM, YYYY")}</h2>
        <form onSubmit={this.handleSubmit} className="content">
          <div className="form-field">
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" value={title} onChange={e =>this.setState({title: e.target.value})}/>
          </div>

          <div className="form-field">
            <label htmlFor="from">From: </label>
            <input type="time" id="from" value={startTime} onChange={e => this.setState({startTime: e.target.value})}/>

            <label htmlFor="to">To: </label>
            <input type="time" id="to" value={endTime} onChange={e => this.setState({endTime: e.target.value})}/>
          </div>

          <div className="form-field">
            <label htmlFor="detail">Details: </label>
            <input type="textarea" id="detail" value={details} onChange={e => this.setState({details: e.target.value})}/>
          </div>

          <div className="button-container">
            <button type="button" className="cancle" onClick={() => history.back()}>Cancle</button>
            <button className="save">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
