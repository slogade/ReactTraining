import { connect } from 'react-redux'

import { State } from './../reducers'
import { getEvent } from './../actions/events'
import EventDetails from './../components/EventDetails'

const mapStateToProps = (state: State) => {
  return state.selectedEvent
}

const mapDispatchToProps = {
  getEvent
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(EventDetails)