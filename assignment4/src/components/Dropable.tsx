import * as React from 'react'

export const Dropable = ( props: any ) => {
	let { user, index, drop, remove } = props
	// On Drag Over
	let dragOver = (e: any) => {
		// event.target is null inside the callback because, React recycles event objects for performance reasons.
		// So use let style = e.target.style to remember it before recycling
		if(e.target.className == 'user-cell' && (!user || user.suggested)) {
			e.preventDefault()
			let style = e.target.style
			style.backgroundColor = 'yellow'
		}
	}

	// On Drag Leave
	let dragLeave = (e: any) => {
		let style = e.target.style
		if(user && user.suggested) {
			style.backgroundColor = 'yellowgreen'
		} else {
			style.backgroundColor = '#ffffff'
		}
	}

	//On Drop
	let handleDrop = (e: any) => {
		dragLeave(e)
		let user = JSON.parse(e.dataTransfer.getData('user'))
		drop(user.id, index)
	}

	return (
		<div
			className="user-cell"
			onDrop={handleDrop}
			onDragOver={dragOver}
			onDragLeave={dragLeave}
			style={(user && user.suggested) ? { backgroundColor: 'yellowgreen', border: '2px dashed green' } : {}}
		>
			{(user && user.first_name) ? (
				<p>
					{user.first_name} <span onClick={() => remove(user.id, index)}>X</span>
				</p>
			) : (
				''
			)}
		</div>
	)
}
