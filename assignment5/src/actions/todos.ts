import Todo from './../models/Todo'

export enum ActionTypes {
  ADD_TODO = '[todos] ADD_TODO',
  TOGGLE_TODO = '[todos] TOGGLE_TODO',
  REMOVE_TODO = '[todos] REMOVE_TODO'
}

export interface AddTodoAction {
  type: ActionTypes.ADD_TODO,
  payload: {todo: Todo}
}

export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO,
  payload: {todoId: number}
}

export interface RemoveTodoAction {
  type: ActionTypes.REMOVE_TODO,
  payload: {todoId: number}
}

export function addTodo(name: string): AddTodoAction {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: {
        id: new Date().getTime(),
        name: name,
        done: false
      }
    }
  }
}

export function toggleTodo(todoId: number): ToggleTodoAction {
  return {
    type: ActionTypes.TOGGLE_TODO,
    payload: { todoId }
  }
}

export function removeTodo(todoId: number): RemoveTodoAction {
  return {
    type: ActionTypes.REMOVE_TODO,
    payload: { todoId }
  }
}

export type Action = AddTodoAction | ToggleTodoAction | RemoveTodoAction