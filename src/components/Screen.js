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
		const { anEntry, entries, overflow } = this.props;

		let initialEntry = [0],
			overflowLeft = null,
			overflowRight = null,
			shrinkToFit = {},
			textDirection = {
				paddingRight: '10px'
			};

		/*---SET INITIAL BOTTOM DISPLAY TO ZERO WHEN C OR CE---*/
		if (anEntry.length) {
			initialEntry = anEntry;
		}

		/*---TOP DISPLAY TO OVERFLOW SCROLL WITH ARROW BUTTONS WHEN ENTRIES > SCREEN WIDTH---*/
		if (overflow > 480) {
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
				<div id="bottom" className={displayEntry} style={shrinkToFit}>
					{initialEntry}
				</div>
			</div>
		);
	}
}

export default Screen;

const TOP_SCROLL = document.getElementById('top');

/*TODO:
*** - enable scroll arrows
*** - 
*/
