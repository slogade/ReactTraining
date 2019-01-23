import * as React from 'react'
import ControlBar from './../containers/ControlBar'
import EventList from '../containers/EventList'

interface State {
  date: Date
}

export default class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      date: new Date()
    }
  }

  setDate = (date: Date) => {
    this.setState({date})
  }

  render() {
    return (
      <div className="app-container">
        <ControlBar setDate={this.setDate}/>

        <EventList date={this.state.date}/>
      </div>
    )
  }
}