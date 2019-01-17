import { connect } from 'react-redux'
import { getEvent } from './../actions/events'
import EventDetails from './../components/EventDetails'

export default connect<any, any, any>(null, {
  getEvent
})(EventDetails)