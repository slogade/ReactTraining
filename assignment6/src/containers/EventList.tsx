import { connect } from 'react-redux'

import { removeEvent } from './../actions/events'
import { State } from '../reducers'
import EventList from '../components/EventList'

const mapStateToProps = (state: State) => {
  return state.selectedDateEvents
}

const mapDispatchToProps = {
  handleRemove: removeEvent
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(EventList)