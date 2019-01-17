import { connect } from 'react-redux'
import AddEditEvent from './../components/AddEditEvent'
import { addEvent, editEvent } from './../actions/events'

export default connect<any, any, any>(null, {
  handleAdd: addEvent,
  handleEdit: editEvent
})(AddEditEvent)