import React, { Component } from 'react';
import style from 'styles/Screen.css';

class Screen extends Component {
	constructor(props) {
		super(props);
		this.scrollLeft = this.scrollLeft.bind(this);
		this.scrollRight = this.scrollRight.bind(this);
	}

	scrollLeft() {
		TOP_SCROLL.scrollLeft = 0;
	}
	scrollRight() {
		TOP_SCROLL.scrollLeft = 10000;
	}

	render() {
		const { container, topDisplay, displayAll, displayEntry, btn } = style;
		const { entry, entries, overflow, evaluate } = this.props;

		let topEntries = entries,
			bottomEntry = '0',
			calculation = 0,
			overflowLeft = null,
			overflowRight = null,
			shrinkToFit = {},
			textDirection = {
				paddingRight: '10px'
			};

		/*---SET INITIAL BOTTOM DISPLAY TO ZERO WHEN C OR CE---*/
		if (entry) {
			bottomEntry = entry;
		}

		switch (true) {
			case OPERATORS_EXCEPT_MINUS.includes(topEntries[0]):
				topEntries = 'invalid input';
		}

		if (overflow > 480) {
			/*---TOP DISPLAY TO OVERFLOW SCROLL WITH ARROW BUTTONS WHEN ENTRIES > SCREEN WIDTH---*/
			overflowLeft = (
				<a className={btn} onClick={this.scrollLeft}>
					&lsaquo;
				</a>
			);
			overflowRight = (
				<a className={btn} onClick={this.scrollRight}>
					&rsaquo;
				</a>
			);
			textDirection = {
				paddingRight: '0',
				direction: 'rtl'
			};
		}

		/*---SHRINK BOTTOM DISPLAY TO FIT AND LIMIT TO ONLY 9 DIGITS---*/
		if (bottomEntry && bottomEntry.length > 7) {
			shrinkToFit = {
				fontSize: '1.7em',
				paddingTop: '29px'
			};
		}

		return (
			<div className={container}>
				<div className={topDisplay}>
					{overflowLeft}
					<div id="top" className={displayAll} style={textDirection}>
						{topEntries}&lrm;
					</div>
					{overflowRight}
				</div>
				<div id="bottom" className={displayEntry} style={shrinkToFit}>
					{bottomEntry}
				</div>
			</div>
		);
	}
}

export default Screen;

const TOP_SCROLL = document.getElementById('top');
const OPERATORS_EXCEPT_MINUS = ['÷', 'x', '+', '='];

/*TODO:
*** - enable scroll arrows
*** - 
*/
