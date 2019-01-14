import * as React from 'react'
import AddTodo from '../containers/AddTodo'
import Todos from '../containers/Todos'

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="header">
          <h1 className="heading">My To Do List</h1>
          <AddTodo />
        </div>

        <div className="list-container">
          <Todos />
        </div>
      </div>
    )
  }
}

export default App