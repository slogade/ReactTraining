import React, { Component } from 'react';
import './App.css';
import styles from './App.module.css'
import Button from '@material-ui/core/Button'

import { List } from './components/List';

class App extends Component {
  constructor() {
    super()
    this.state = {
      toDoInput: '',
      toDoList: localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : []
    }
  }

  addToDo() {
    this.setState((state) => {
      return {toDoList: [...this.state.toDoList, {
        id: this.state.toDoList.length,
        name: this.state.toDoInput,
        status: 0
      }]};
    }, () => {
      this.setState({toDoInput: ''})
      localStorage.setItem('todolist', JSON.stringify(this.state.toDoList))
    });
  }

  markDone(id) {    
    var index = this.state.toDoList.findIndex(todo => todo.id === id)
    var temp = this.state.toDoList
    temp[index].status = 1
    this.setState({toDoList: temp})
    localStorage.setItem('todolist', JSON.stringify(this.state.toDoList))
  }

  remove(id) {
    var index = this.state.toDoList.findIndex(todo => todo.id === id)
    var temp = this.state.toDoList
    temp.splice(index, 1)
    this.setState({toDoList: temp})
    localStorage.setItem('todolist', JSON.stringify(this.state.toDoList))
  }

  render() {
    return (
      <div className="app-container">
        <div className="header">
          <h1 className="heading">My To Do List</h1>
          <div className="add-todo">
            <input className="todo-input" placeholder="Title..." value={this.state.toDoInput} onChange={event => this.setState({toDoInput: event.target.value})}/>
            <button className="add-button" onClick={() => this.addToDo()}>Add</button>
          </div>
        </div>

        <div className="list-container">
          {this.state.toDoList.map(todo => <List toDo={todo} key={todo.id} markDone={(id) => this.markDone(id)} remove={(id) => this.remove(id)}/>)}
        </div>

        {/* CSS in React Implementation */}
        <div className="css-methods">
          <div className="standard-css">Standard CSS</div>
          <div style={{color: 'red', backgroundColor: 'yellow', border: '2px solid #5a5c88'}}>Inline CSS</div>
          <div className={styles.moduleCss}>
            Module CSS
            <div>Test module inheritance</div>
          </div>
          <Button variant="contained" color="primary" style={{color: 'red'}}>css in js</Button>
          <div style={{color: 'red'}}>
            <div>Test inheritance</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
