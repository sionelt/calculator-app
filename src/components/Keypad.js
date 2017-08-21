import React, { Component } from 'react';
import style from 'styles/Keypad.css';

class Keypad extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { container, inputs, aInput, operators, aOperator } = style;
		const { allInputs, allOperators, onInput, display } = this.props;
		return (
			<div className={container}>
				<ul className={inputs}>
					{allInputs.map(input =>
						<li key={input} className={aInput} onClick={() => onInput(input)}>
							{input}
						</li>
					)}
				</ul>
				<ul className={operators}>
					{allOperators.map(operator =>
						<li key={operator} className={aOperator}>
							{operator}
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Keypad;
