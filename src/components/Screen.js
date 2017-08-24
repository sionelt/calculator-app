import React, { Component } from 'react';
import style from 'styles/Screen.css';

class Screen extends Component {
	constructor(props) {
		super(props);
		this.scrollLeft = this.scrollLeft.bind(this);
		this.scrollRight = this.scrollRight.bind(this);
	}
	scrollLeft(textDirection) {
		const top = document.getElementById('top');
		top.scrollLeft = 0;
	}
	scrollRight(textDirection) {
		const top = document.getElementById('top');
		top.scrollLeft = 300;
	}

	render() {
		const { container, topDisplay, displayAll, displayEntry, btn } = style;
		const { anEntry, entries, overflow } = this.props;
		let initialEntry = [0],
			overflowLeft = null,
			overflowRight = null,
			shrinkToFit = {},
			textDirection = {
				paddingRight: '10px'
			};

		if (anEntry.length) {
			initialEntry = anEntry;
		}

		if (overflow > 270) {
			overflowLeft = (
				<a className={btn} onClick={() => this.scrollLeft(textDirection)}>
					&lsaquo;
				</a>
			);
			overflowRight = (
				<a className={btn} onClick={() => this.scrollRight(textDirection)}>
					&rsaquo;
				</a>
			);
			textDirection = {
				paddingRight: '0',
				direction: 'rtl'
			};
		}

		if (initialEntry.length > 6) {
			shrinkToFit = {
				fontSize: '1.83em',
				paddingTop: '25px'
			};

			isNaN(parseInt(initialEntry[initialEntry.length - 1], 10)) ? initialEntry.splice(10) : initialEntry.splice(9);
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
*** - enable scroll arrows
*** - 
*/
