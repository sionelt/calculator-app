import React, { Component } from 'react';
import style from 'styles/Screen.css';

class Screen extends Component {
	constructor(props) {
		super(props);
		this.state = { top: null };
	}

	render() {
		const { container, displayAll, displayEntry, btn } = style;
		const { anEntry, entries } = this.props;
		var initialEntry = [0];

		if (anEntry.length) {
			initialEntry = anEntry;
		}
		return (
			<div className={container}>
				<div id="top" className={displayAll}>
					<button className={btn}>&lsaquo;</button>
					{entries}
					<button className={btn}>&rsaquo;</button>
				</div>
				<div className={displayEntry}>
					{initialEntry}
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
