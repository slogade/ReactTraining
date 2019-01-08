import React from 'react'

export function List (props) {
  var toDo = props.toDo
  var markDone = props.markDone
  var remove = props.remove

  return (
    <div className="list">
      <span className="check">{toDo.status ? <i className="fas fa-check"></i> : ''}</span>
      {toDo.status ? <strike>{toDo.name}</strike> : <span className="todo" onClick={() => markDone(toDo.id)}>{toDo.name}</span>}
      <i className="fa fa-times" onClick={() => remove(toDo.id)}></i>
    </div>
  )
}