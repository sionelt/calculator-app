import React from 'react';
import style from 'styles/Keypad.css';

const Keypad = props => {
	const { container, inputs, aInput, operators, aOperator } = style;
	const { allInputs, allOperators, onInput } = this.props;
	return (
		<div className={container}>
			<ul className={inputs}>
				{allInputs.map(input =>
					<li key={input} className={aInput}>
						{input}
					</li>
				)}
			</ul>
			<ul className={operators}>
				{allOperators.map(operator =>
					<li key={operator} className={aOperator} onClick={onInput}>
						{operator}
					</li>
				)}
			</ul>
		</div>
	);
};

export default Keypad;
