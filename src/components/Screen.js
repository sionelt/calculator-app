import React, { Component } from 'react';
import style from 'styles/Screen.css';

class Screen extends Component {
	constructor(props) {
		super(props);
		this.state = { anEntry: props.allInputs, allEntries: [] };
		this.handleDisplayAll = this.handleDisplayAll.bind(this);
	}

	componentWillReceiveProps(props) {
		this.state = { anEntry: props.allInputs };
	}

	// componentDidMount() {
	// 	this.handleDisplayAll();
	// }

	handleDisplayAll() {
		// if (this.props.runOperator !== '') {
		// 	this.setState(prevState => ({ anEntry: '', allEntries: prevState.allEntries.concat(this.props.allInputs) }));
		// }
	}

	render() {
		const { container, displayAll, displayEntry } = style;
		return (
			<div className={container}>
				<div className={displayAll}>
					{this.props.runOperator}
				</div>
				<div className={displayEntry}>
					{this.state.anEntry}
				</div>
			</div>
		);
	}
}

export default Screen;

/*TODO:
*** - function to control the shrink of display entry when reached 6 digit
*** - function to control text-flow: ecllipse of display all
*/
