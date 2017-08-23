import React, { Component } from 'react';
import style from 'styles/Keypad.css';

const Keypad = props => {
	const { container, inputs, input, operators, operator } = style;
	const { inputKeys, operatorKeys, onInput, onKeyDown } = props;
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
					<li key={anOperator} className={operator} onClick={() => onInput(anOperator)}>
						{anOperator}
					</li>
				)}
			</ul>
		</div>
	);
};

export default Keypad;
