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
		const { entry, entries, overflow, operators } = this.props;

		let topEntries = entries,
			bottomEntry = '',
			calculation = 0,
			overflowLeft = null,
			overflowRight = null,
			shrinkToFit = {},
			textDirection = {
				paddingRight: '10px'
			};

		// set reset display to 0 when C or CE.
		entry ? (bottomEntry = entry) : (bottomEntry = '0');

		// display invalid if operators is input incorrectly.
		operators.includes(topEntries[0]) ? (topEntries = 'invalid input') : (topEntries = entries);

		// set top display to overflow scroll with arrows navigation when entries > screen width.
		if (topEntries && topEntries.length > 15) {
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
				paddingRight: '0'
			};
		}

		// shrink and limit bottom display to fit screen width and 9 digits only.
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
