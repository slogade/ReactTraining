import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route } from "react-router-dom"

import App from './components/App'
import AddEditEvent from './containers/AddEditEvent'
import EventDetails from './containers/EventDetails'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/add/:date" component={AddEditEvent} />
        <Route path="/edit/:id" component={AddEditEvent} />
        <Route path="/details/:event" component={EventDetails} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
)