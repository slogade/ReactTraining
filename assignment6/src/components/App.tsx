import * as React from 'react'
import ControlBar from './ControlBar'
import EventList from './../containers/Events'

interface State {
  date: Date
}

interface Props {

}

export default class App extends React.Component<Props, State> {
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