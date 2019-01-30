import * as React from 'react'
import ControlBar from './../containers/ControlBar'
import EventList from '../containers/EventList'

const App = () => {
    return (
        <div className="app-container">
            <ControlBar />

            <EventList />
        </div>
    )
}

export default App