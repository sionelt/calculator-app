import React, { Component } from 'react';
import style from 'styles/Screen.css';

class Screen extends Component {
	constructor(props) {
		super(props);
		this.state = { top: null };
	}

	render() {
		const { container, topDisplay, displayAll, displayEntry, btn } = style;
		const { anEntry, entries, overflow } = this.props;
		let initialEntry = [0];
		let overflowLeft = null,
			overflowRight = null,
			shrinkToFit = {},
			textDirection = {
				paddingRight: '10px'
			};

		if (anEntry.length) {
			initialEntry = anEntry;
		}

		if (overflow > 270) {
			overflowLeft = <a className={btn}>&lsaquo;</a>;
			overflowRight = <a className={btn}>&rsaquo;</a>;
			textDirection = {
				paddingRight: '0',
				direction: 'rtl'
			};
		}

		if (initialEntry.length > 7) {
			shrinkToFit = {
				fontSize: '2em',
				paddingTop: '17px'
			};
			initialEntry.splice(9);
		}

		return (
			<div className={container}>
				<div className={topDisplay}>
					{overflowLeft}
					<div id="top" className={displayAll} style={textDirection}>
						{entries}&lrm;
					</div>
					{overflowRight}
				</div>
				<div className={displayEntry} style={shrinkToFit}>
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
