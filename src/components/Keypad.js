import React, { Component } from 'react';
import style from 'styles/Keypad.css';

const Keypad = props => {
	const { container, inputs, input, operators, operator } = style;
	const { inputKeys, operatorKeys, onInput } = props;
	return (
		<div className={container}>
			<ul className={inputs}>
				{inputKeys.map(anInput =>
					<li key={anInput} className={input} onClick={() => onInput(anInput)}>
						{anInput}
					</li>
				)}
			</ul>
			<ul className={operators}>
				{operatorKeys.map(anOperator =>
					<li key={anOperator} className={operator}>
						{anOperator}
					</li>
				)}
			</ul>
		</div>
	);
};

export default Keypad;
