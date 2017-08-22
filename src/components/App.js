import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';
import Keypad from './Keypad';
import Screen from './Screen';

class App extends Component {
	constructor() {
		super();
		this.state = { inputsArr: [], currentOperator: '', allEntries: [] };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(anInput) {
		this.setState(prevState => ({ inputsArr: [...prevState.inputsArr, anInput] }));
		if (OPERATORS.includes(anInput)) {
			this.setState(prevState => ({
				allEntries: [...prevState.allEntries, this.state.inputsArr, anInput],
				inputsArr: []
			}));
		} else if (anInput === 'C') {
			this.setState({ inputsArr: [], allEntries: [] });
		} else if (anInput === 'CE') {
			this.setState({ inputsArr: [] });
		}
	}

	render() {
		const { demo, container } = style;
		const { inputsArr, currentOperator, allEntries } = this.state;
		return (
			<div className={demo}>
				<Helmet>
					<title>improved clone iphone calculator</title>
					<link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300" rel="stylesheet" />
				</Helmet>
				<div className={container}>
					<Screen anEntry={inputsArr} entries={allEntries} />
					<Keypad inputKeys={INPUTS} operatorKeys={OPERATORS} onInput={this.handleClick} />
				</div>
			</div>
		);
	}
}

export default App;

const INPUTS = ['C', 'CE', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '( )', '.'];
const OPERATORS = ['/', 'x', '-', '+', '='];
