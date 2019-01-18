import * as React from 'react'
import { FormEvent } from 'react'
import * as moment from 'moment'

import Event from './../models/Event';

interface State {
  date: Date,
  id: number,
  title: string,
  startTime: string,
  endTime: string,
  details: string
}

export default class AddEditEvent extends React.Component<any, State> {  
  constructor(props: any) {
    super(props)

    let { date, id } = this.props.match.params
    let event: Event

    if (date) {
      date = new Date(date)
    } else {
      event = JSON.parse(id)
    }

    this.state = {
      date: date ? date : new Date(event.startTime),
      id: event ? event.id : null,
      title: event ? event.title : '',
      startTime: event ? event.startTime.slice(16, 21) : '',
      endTime: event ? event.endTime.slice(16, 21) : '',
      details: event ? (event.details || '') : ''
    }
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { handleAdd, handleEdit } = this.props
    let event
    
    if (this.state.startTime && this.state.endTime && this.state.title) {
      let startTime: any = this.state.startTime.split(':').map(hr => parseInt(hr))
      let endTime: any = this.state.endTime.split(':').map(hr => parseInt(hr))

      startTime = new Date(this.state.date).setHours(startTime[0], startTime[1])
      endTime = new Date(this.state.date).setHours(endTime[0], endTime[1])

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
    const { title } = this.state

    return (
      <div className="event-form">
        <h1 className="heading">{this.state.id ? 'Edit' : 'Create'} Event</h1>
        <h2>Date: {moment(this.state.date).format("DD MMM, YYYY")}</h2>
        <form onSubmit={this.handleSubmit} className="content">
          <div className="form-field">
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" value={title} onChange={e =>this.setState({title: e.target.value})}/>
          </div>

          <div className="form-field">
            <label htmlFor="from">From: </label>
            <input type="time" id="from" value={this.state.startTime} onChange={e => this.setState({startTime: e.target.value})}/>

            <label htmlFor="to">To: </label>
            <input type="time" id="to" value={this.state.endTime} onChange={e => this.setState({endTime: e.target.value})}/>
          </div>

          <div className="form-field">
            <label htmlFor="detail">Details: </label>
            <input type="textarea" id="detail" value={this.state.details} onChange={e => this.setState({details: e.target.value})}/>
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
