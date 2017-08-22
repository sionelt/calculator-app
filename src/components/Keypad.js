import React, { Component } from 'react';
import style from 'styles/Keypad.css';

const Keypad = props => {
	const { container, inputs, aInput, operators, aOperator } = style;
	const { AllInputs, AllOperators, OnInput } = props;
	return (
		<div className={container}>
			<ul className={inputs}>
				{AllInputs.map(anInput =>
					<li key={input} className={input} onClick={() => OnInput(anInput)}>
						{anInput}
					</li>
				)}
			</ul>
			<ul className={operators}>
				{AllOperators.map(anOperator =>
					<li key={operator} className={operator}>
						{anOperator}
					</li>
				)}
			</ul>
		</div>
	);
};

export default Keypad;
