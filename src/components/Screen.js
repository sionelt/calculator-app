import React, { Component } from 'react';
import style from 'styles/Screen.css';

class Screen extends Component {
	constructor(props) {
		super(props);
		this.state = { anEntry: '', allEntries: '' };
	}

	componentDidMount() {
		this.setState(prevState => {
			return { allEntries: prevState.allEntries + this.props.display };
		});
	}

	render() {
		const { container, displayAll, displayEntry } = style;
		const a = '';
		return (
			<div className={container}>
				<div className={displayAll}>
					{this.props.allInputs}
				</div>
				<div className={displayEntry}>
					{this.props.allInputs[this.props.allInputs.length - 1]}
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
