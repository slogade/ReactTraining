import * as React from 'react';

export default class Dropable extends React.Component<{ drop: Function; remove: Function; dragStatus: Boolean }> {
	state: { dropped: any };
	constructor(props: any) {
		super(props);

		this.state = {
			dropped: null
		};
	}

	// On Drag Over
	dragOver = (e: any) => {
		e.preventDefault();
		// event.target is null inside the callback because, React recycles event objects for performance reasons.
		// So use let style = e.target.style to remember it before recycling
		let style = e.target.style;
		style.backgroundColor = 'yellow';
	};

	// On Drag Leave
	dragLeave = (e: any) => {
		let style = e.target.style;
		style.backgroundColor = '#ffffff';
	};

	//On Drop
	drop = (e: any) => {
		this.dragLeave(e);
		if (!this.state.dropped) {
			let { drop } = this.props;

			let user = JSON.parse(e.dataTransfer.getData('user'));
			this.setState({ dropped: user });
			drop(user.id);
		} else {
			alert('This cell already contains an user!');
		}
	};

	// On Remove
	remove = () => {
		this.props.remove(this.state.dropped.id);
		this.setState({ dropped: null });
	};

	render() {
		let { dragStatus } = this.props;
		return (
			<div
				className="user-cell"
				onDrop={this.drop}
				onDragOver={this.dragOver}
				onDragLeave={this.dragLeave}
				style={dragStatus && !this.state.dropped ? { border: '2px dashed yellowgreen' } : {}}
			>
				{this.state.dropped ? (
					<p>
						{this.state.dropped.name} <span onClick={this.remove}>X</span>
					</p>
				) : (
					''
				)}
			</div>
		);
	}
}
