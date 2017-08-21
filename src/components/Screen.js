import React, { Component } from 'react';
import style from 'styles/Screen.css';

class Screen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { container, displayAll, displayEntry } = style;
		return (
			<div className={container}>
				<div className={displayAll}>12+32</div>
				<div className={displayEntry}>123,456,789</div>
			</div>
		);
	}
}

export default Screen;

/*TODO:
*** - function to control the shrink of display entry when reached 6 digit
*** - function to control text-flow: ecllipse of display all
*/
