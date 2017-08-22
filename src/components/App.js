import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';
import Keypad from './Keypad';
import Screen from './Screen';

class App extends Component {
	constructor() {
		super();
		this.state = { inputsArr: [], currentOperator: '' };
		this.handleInputClick = this.handleInputClick.bind(this);
		this.handleOperatorClick = this.handleOperatorClick.bind(this);
	}

	handleInputClick(anInput) {
		this.setState(prevState => ({ inputsArr: [...prevState.inputsArr, anInput] }));
		console.log(this.state.inputsArr);
	}
	handleOperatorClick(anOperator) {
		this.setState({ currrentOperator: anOperator });
	}

	render() {
		const { demo, container } = style;
		const { inputsArr, currentOperator } = this.state;
		return (
			<div className={demo}>
				<Helmet>
					<title>improved clone iphone calculator</title>
					<link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300" rel="stylesheet" />
				</Helmet>
				<div className={container}>
					<Screen allInputs={inputsArr} runOperator={currentOperator} />
					<Keypad
						inputKeys={INPUTS}
						operatorKeys={OPERATORS}
						onInput={this.handleInputClick}
						onOperator={this.handleOperatorClick}
					/>
				</div>
			</div>
		);
	}
}

export default App;

const INPUTS = ['C', '<', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '()', '.'];
const OPERATORS = ['/', 'x', '-', '+', '='];
