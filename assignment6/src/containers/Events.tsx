import { connect } from 'react-redux'
import { State } from './../reducers'
import { removeEvent } from './../actions/events'
import EventList from './../components/EventList'

const mapStateToProps = (state: State) => state.events

const mapDispatchToProps = {
  handleRemove: removeEvent
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(EventList)