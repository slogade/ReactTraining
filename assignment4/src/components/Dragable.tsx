import * as React from 'react'

// Functional / stateless component
export const Dragable = (props: any) => {
	let { user, dragStart, dragEnd } = props

	// On Drag Start
	let handleDragStart = (e: any) => {
		let ev = { ...e }
		ev.dataTransfer.setData('user', JSON.stringify({ id: user.id, name: user.first_name }))
		dragStart()
	}

	return (
		<div className="user" key={user.id} draggable={true} onDragStart={handleDragStart} onDragEnd={dragEnd}>
			{user.first_name} {user.last_name}
		</div>
	)
}
