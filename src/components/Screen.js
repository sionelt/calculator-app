import React, { Component } from 'react';
import style from 'styles/Screen.css';

const Screen = props => {
	const { container, topDisplay, displayAll, displayEntry, btn } = style;
	const { entry, entries, operators } = props;
	const TOP_SCROLL = document.getElementById('top');

	const handleScrollLeft = () => {
		TOP_SCROLL.scrollLeft = 0;
	};

	const handleScrollRight = () => {
		TOP_SCROLL.scrollLeft = 10000;
	};

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
	operators.includes(topEntries[0]) ? (topEntries = 'invalid input') : null;

	// set top display to overflow scroll with arrows navigation when entries > screen width.
	if (topEntries && topEntries.length > 15) {
		overflowLeft = (
			<a className={btn} onClick={handleScrollLeft}>
				&lsaquo;
			</a>
		);

		overflowRight = (
			<a className={btn} onClick={handleScrollRight}>
				&rsaquo;
			</a>
		);

		textDirection = {
			paddingRight: '0'
		};
	}

	// shrink and limit bottom display entry to fit screen width and 9 digits only.
	if (bottomEntry && bottomEntry.length > 7) {
		shrinkToFit = {
			fontSize: '1.7em',
			paddingTop: '29px'
		};
		// convert overflow returned answer into exponential format with 4 decimals max.
		if (bottomEntry.length > 11) {
			// counting commas; 9 digits + 2 commas.
			bottomEntry = parseFloat(bottomEntry).toExponential(4).toLocaleString();
		}
	}

	return (
		<div className={container}>
			<div className={topDisplay}>
				{overflowLeft}
				<div id="top" className={displayAll} style={textDirection}>
					{topEntries}
				</div>
				{overflowRight}
			</div>
			<div className={displayEntry} style={shrinkToFit}>
				{bottomEntry}
			</div>
		</div>
	);
};

export default Screen;
