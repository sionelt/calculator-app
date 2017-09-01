import React from 'react';
import style from 'styles/Screen.css';
import propTypes from 'prop-types';

const Screen = props => {
	const { container, topDisplay, displayAll, displayEntry, btn } = style;
	const { entry, entries, validInput } = props;
	const TOP_SCROLL = document.getElementById('top');

	const handleScrollLeft = () => {
		TOP_SCROLL.scrollLeft = -300;
	};

	const handleScrollRight = () => {
		TOP_SCROLL.scrollLeft = 1000;
	};

	let topEntries = entries,
		bottomEntry = '',
		calculation = 0,
		overflowLeft = null,
		overflowRight = null,
		shrinkToFit = {},
		topTextDirection = {},
		topContainerDirection = {
			paddingRight: '10px'
		};

	// default to display 0 when its a invalid input, C or CE.
	validInput ? (bottomEntry = entry) : (bottomEntry = '0');

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

		/*--THIS ALLOW AUTO SCROLL TO THE END WHEN TOP DISPLAY IS UPDATED--*/
		// top display's container direction; right to left.
		topContainerDirection = {
			paddingRight: '0',
			direction: 'rtl'
		};
		// set text within top display container; left to right.
		topTextDirection = {
			direction: 'ltr'
		};
	}

	// shrink and limit bottom display entry to fit screen width and 9 digits only.
	if (bottomEntry && bottomEntry.length > 7) {
		// equavalent of media queries for mobile
		const mobileSize = window.matchMedia('(max-width: 500px)');
		if (mobileSize.matches) {
			shrinkToFit = {
				fontSize: '2em'
			};
		} else {
			shrinkToFit = {
				fontSize: '1.7em',
				paddingTop: '29px'
			};
		}

		// convert overflow returned answer into exponential format with 4 decimals max.
		if (bottomEntry.length > 11) {
			// counting commas; 9 digits + 2 commas.
			bottomEntry = parseFloat(bottomEntry).toExponential(5).toLocaleString(undefined, { maximumFractionDigits: 8 });
		}
	}

	return (
		<div className={container}>
			<div className={topDisplay}>
				{overflowLeft}
				<div id="top" className={displayAll} style={topContainerDirection}>
					<span style={topTextDirection}>
						{topEntries}
					</span>
				</div>
				{overflowRight}
			</div>
			<div className={displayEntry} style={shrinkToFit}>
				{bottomEntry}
			</div>
		</div>
	);
};

Screen.propTypes = {
	entry: propTypes.string.isRequred,
	entries: propTypes.string.isRequired
};

export default Screen;
