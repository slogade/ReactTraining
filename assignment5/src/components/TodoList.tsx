import * as React from 'react'
import Todo from '../models/Todo'

interface Props {
  todos: Todo[],
  onTodoClicked: (todoId: number) => void,
  onTodoRemoved: (todoId: number) => void
}
interface State { }

export default class TodoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { todos, onTodoClicked, onTodoRemoved } = this.props
    return (
      <ul style={{paddingLeft: '0'}}>
        {
          todos.map(todo => (
            <li key={todo.id} className="list">
              <span
                onClick={() => onTodoClicked(todo.id)}
                style={{ textDecoration: `${todo.done ? 'line-through' : ''}`, cursor: 'pointer' }}
              >
                {todo.name}
              </span>
              <span style={{float: 'right'}} onClick={() => onTodoRemoved(todo.id)}>X</span>
            </li>)
          )
        }
      </ul>
    )
  }
}