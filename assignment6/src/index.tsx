import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route } from "react-router-dom"

import App from './components/App'
import AddEditEvent from './components/AddEditEvent'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/addEdit" component={AddEditEvent} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
)