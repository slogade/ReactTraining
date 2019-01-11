import * as React from 'react'

export default class UserList extends React.Component<{user: any, dragStart: Function, dragEnd: Function}> {
  constructor(props: any) {
    super(props)
  }

  // On Drag Start
  dragStart = (e: any) => {
    let {user, dragStart} = this.props
    let ev = {...e}
    ev.dataTransfer.setData('user', JSON.stringify({id: user.id, name: user.first_name}))
    dragStart()
  }

  render() {
    let {user, dragEnd} = this.props

    return (
      <div className="user" key={user.id} draggable={true} onDragStart={this.dragStart} onDragEnd={() => dragEnd()}>
        {user.first_name} {user.last_name}
      </div>
    )
  }
}
