import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';
import Keypad from './Keypad';
import Screen from './Screen';

class App extends Component {
	constructor() {
		super();
		this.state = { inputsArr: [], allEntries: [], toggleParenthesis: true };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(anInput) {
		const { inputsArr, toggleParenthesis } = this.state;
		var top = document.getElementById('top').scrollWidth;
		console.log(top);

		if (anInput === '( )') {
			this.setState(prevState => ({ inputsArr: [...prevState.inputsArr] }));

			toggleParenthesis
				? this.setState(prevState => ({
						allEntries: [...prevState.allEntries, '('],
						toggleParenthesis: false
					}))
				: this.setState(prevState => ({
						allEntries: [...prevState.allEntries, inputsArr, ')'],
						toggleParenthesis: true
					}));
		} else {
			this.setState(prevState => ({ inputsArr: [...prevState.inputsArr, anInput] }));

			if (OPERATORS.includes(anInput)) {
				anInput === '='
					? this.setState({})
					: this.setState(prevState => ({
							allEntries: [...prevState.allEntries, inputsArr, anInput],
							inputsArr: []
						}));
			} else if (anInput === 'C') {
				this.setState({ inputsArr: [], allEntries: [], toggleParenthesis: true });
			} else if (anInput === 'CE') {
				this.setState({ inputsArr: [], toggleParenthesis: true });
			} else if (anInput === '%') {
				this.setState({ inputsArr: [parseFloat(inputsArr.join('')) / 100] });
			}
		}
	}

	render() {
		const { demo, container } = style;
		const { inputsArr, allEntries } = this.state;
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
