import * as React from 'react'
import { FormEvent } from 'react'

interface State {
  title: string,
  startTime: string,
  endTime: string
}

export default class AddEditEvent extends React.Component<any, State> {  
  constructor(Props: any) {
    super(Props)

    this.state = {
      title: '',
      startTime: '',
      endTime: ''
    }
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()


  }

  onTitleChange = (title: string) => {
    this.setState({title})
  }
  
  onFromChange = (startTime: string) => {
    this.setState({startTime})
  }

  onDurationChange = (endTime: string) => {
    if(parseFloat(endTime) > 2) {
      this.setState({endTime: '2'})
    }
    this.setState({endTime})
  }

  render() {
    const { title } = this.state

    return (
      <div className="event-form">
        <h1 style={{textAlign: 'center'}}>Create Event</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" value={title} onChange={e => this.onTitleChange(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="from">Slot: </label>
            <input type="time" id="from" onChange={e => this.onFromChange(e.target.value)}/>

            <label htmlFor="duration">Duration: </label>
            <input type="number" id="duration" min="0" max="2" onChange={e => this.onDurationChange(e.target.value)}/> hr
          </div>
          <button >Create</button>
        </form>
      </div>
    )
  }
}
