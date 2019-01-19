import * as React from 'react'
import { Link } from "react-router-dom"
import * as moment from 'moment'

interface Props {
  dateChange: Function
}

interface State {
  date: Date
}

export default class ControlBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      date: new Date()
    }
  }

  increment = () => {
    let {date} = this.state
    this.setState({date: new Date(date.getFullYear(), date.getMonth(), (date.getDate() + 1))}, () => this.props.dateChange(this.state.date.toDateString()))
  }

  decrement = () => {
    let {date} = this.state
    this.setState({date: new Date(date.getFullYear(), date.getMonth(), (date.getDate() - 1))}, () => this.props.dateChange(this.state.date.toDateString()))
  }

  today = () => {
    this.setState({date: new Date()}, () => this.props.dateChange(this.state.date.toDateString()))
  }

  componentDidMount = () => {
    this.props.dateChange(this.state.date.toDateString())
  }

  render() {
    return (
      <div className="control-bar">
        <div className="left-pannel">
          <button className="control" onClick={this.today}>Today</button>
        </div>
        <div className="date">
          <button className="control" onClick={this.decrement}>{'<'}</button>
          <span>{ moment(this.state.date).format("DD MMM, YYYY") }</span>
          <button className="control" onClick={this.increment}>{'>'}</button>
        </div>
        <div className="right-pannel">
          <Link to={`/add/${this.state.date.toString()}`}><button className="control">Add</button></Link>
        </div>
      </div>
    )
  }
}
