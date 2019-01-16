import { connect } from 'react-redux'
import { State } from './../reducers'
import { getEvents } from './../actions/events'

import EventList from './../components/EventList'

const mapStateToProps = (state: State) => state.events

export default connect<any, any, any>(mapStateToProps)(EventList)