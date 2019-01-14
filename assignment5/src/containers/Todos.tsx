import { connect } from 'react-redux'
import { State } from './../reducers'
import { getTodos } from './../selectors/todos'
import { toggleTodo, removeTodo } from './../actions/todos'

import TodosList from './../components/TodoList'

const mapStateToProps = (state: State) => ({
  todos: getTodos(state)
})

const mapDispatchToProps = {
  onTodoClicked: toggleTodo,
  onTodoRemoved: removeTodo
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TodosList)