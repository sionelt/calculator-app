import React, { Component } from 'react';
import style from 'styles/Screen.css';

const Screen = props => {
	const { container, displayAll, displayEntry } = style;
	const { anEntry, entries } = props;
	var initialEntry = [0];
	if (anEntry.length) {
		initialEntry = anEntry;
	}
	return (
		<div className={container}>
			<div className={displayAll}>
				{entries}
			</div>
			<div className={displayEntry}>
				{initialEntry}
			</div>
		</div>
	);
};

export default Screen;

/*TODO:
*** - function to control the shrink of display entry when reached 6 digit
*** - function to control text-flow: ecllipse of display all
*/
