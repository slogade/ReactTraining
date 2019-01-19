import { connect } from 'react-redux'

import { State } from '../reducers'
import { addEvent, editEvent, getEvent } from './../actions/events'
import AddEditEvent from './../components/AddEditEvent'

const mapStateToProps = (state: State) => {
  return state.selectedEvent
}

const mapDispatchToProps = {
  getEvent: getEvent,
  handleAdd: addEvent,
  handleEdit: editEvent
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(AddEditEvent)