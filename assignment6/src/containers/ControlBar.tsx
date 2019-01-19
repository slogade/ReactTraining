import { connect } from 'react-redux'

import ControlBar from './../components/ControlBar'
import { getSelectedDateEvents } from './../actions/events'

const mapDispatchToProps = {
  dateChange: getSelectedDateEvents
}

export default connect<any, any, any>(null, mapDispatchToProps)(ControlBar)