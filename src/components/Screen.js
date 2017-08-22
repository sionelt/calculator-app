import React, { Component } from 'react';
import style from 'styles/Screen.css';

const Screen = props => {
	const { container, displayAll, displayEntry } = style;
	return (
		<div className={container}>
			<div className={displayAll}>
				{props.entries}
			</div>
			<div className={displayEntry}>
				{props.anEntry}
			</div>
		</div>
	);
};

export default Screen;

/*TODO:
*** - function to control the shrink of display entry when reached 6 digit
*** - function to control text-flow: ecllipse of display all
*/
