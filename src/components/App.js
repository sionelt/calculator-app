import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';
import Keypad from './Keypad';
import Screen from './Screen';

class App extends Component {
	constructor() {
		super();
		this.state = { inputsArr: [] };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(anInput) {
		this.setState(prevState => ({ inputsArr: [...prevState.inputsArr, anInput] }));
		console.log(this.state.inputsArr);
	}

	render() {
		const { demo, container } = style;
		return (
			<div className={demo}>
				<Helmet>
					<title>improved clone iphone calculator</title>
					<link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300" rel="stylesheet" />
				</Helmet>
				<div className={container}>
					<Screen allInputs={this.state.inputsArr} />
					<Keypad inputKeys={INPUTS} operatorKeys={OPERATORS} onInput={this.handleClick} />
				</div>
			</div>
		);
	}
}

export default App;

const INPUTS = ['C', '<', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '()', '.'];
const OPERATORS = ['/', 'x', '-', '+', '='];
