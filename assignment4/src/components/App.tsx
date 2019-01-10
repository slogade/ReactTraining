import * as React from 'react'

import UserList from './UserList'
import UserTable from './UserTable'

export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="header">
          <div className="heading">User Management</div>
        </div>

        <div className="content">
          <div className="list" id="user-list">
            <UserList/>
          </div>

          <div id="user-table" className="user-content">
            <UserTable/>
          </div>
        </div>
      </div>
    )
  }
}
 