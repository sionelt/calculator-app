import React from 'react';
import style from 'styles/Keypad.css';

const Keypad = () => {
	const { container, inputs, aInput, operators, aOperator } = style;
	const INPUTS = ['C', '<', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '()', '.'];
	const OPERATORS = ['/', 'X', '-', '+', '='];
	return (
		<div className={container}>
			<ul className={inputs}>
				{INPUTS.map(input =>
					<li key={input} className={aInput}>
						{input}
					</li>
				)}
			</ul>
			<ul className={operators}>
				{OPERATORS.map(operator =>
					<li key={operator} className={aOperator}>
						{operator}
					</li>
				)}
			</ul>
		</div>
	);
};

export default Keypad;
