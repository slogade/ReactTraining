import Todo from '../models/Todo'
import { Action, ActionTypes } from '../actions/todos'

export interface State {
  todos: Todo[]
}

export const initialState: State = {
  todos: localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []
}

export function reducer(state: State = initialState, action: Action) {
  switch(action.type) {
    case ActionTypes.ADD_TODO: {
      const todo = action.payload.todo
      const todos = [...state.todos, todo]

      localStorage.setItem('todo', JSON.stringify(todos))
      return { ...state, todos }
    }

    case ActionTypes.TOGGLE_TODO: {
      const { todoId } = action.payload
      const todos = state.todos.map(todo => todo.id === todoId ? {...todo, done: !todo.done} : todo)
      
      localStorage.setItem('todo', JSON.stringify(todos))
      return { ...state, todos }
    }

    case ActionTypes.REMOVE_TODO: {
      const { todoId } = action.payload
      const todos = state.todos.filter(todo => todo.id !== todoId)

      localStorage.setItem('todo', JSON.stringify(todos))
      return { ...state, todos }
    }

    default:
      return state
  }
}