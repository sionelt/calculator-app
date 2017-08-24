import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';
import Keypad from './Keypad';
import Screen from './Screen';

class App extends Component {
	constructor() {
		super();
		this.state = { inputsArr: [], allEntries: [], toggleParenthesis: true, scrollLength: null };
		this.handleClick = this.handleClick.bind(this);
		this.handleDisplayWidth = this.handleDisplayWidth.bind(this);
	}

	/*--CLICK HANDLER-------------------------------------------------------------*/
	handleClick(anInput) {
		const { inputsArr, keyPress, toggleParenthesis } = this.state;

		this.handleDisplayWidth();

		if (anInput === '( )') {
			this.setState(prevState => ({ inputsArr: [...prevState.inputsArr] }));

			toggleParenthesis
				? this.setState(prevState => ({
						allEntries: [...prevState.allEntries, '('],
						toggleParenthesis: false,
						inputsArr: []
					}))
				: this.setState(prevState => ({
						allEntries: [...prevState.allEntries, inputsArr, ')'],
						toggleParenthesis: true,
						inputsArr: []
					}));
		} else {
			this.setState(prevState => ({ inputsArr: [...prevState.inputsArr, anInput] }));

			if (OPERATORS.includes(anInput)) {
				this.setState(prevState => ({
					allEntries: [...prevState.allEntries, inputsArr, anInput],
					inputsArr: []
				}));
			} else if (anInput === 'C') {
				this.setState({ inputsArr: [], allEntries: [], toggleParenthesis: true, scrollLength: null, keyPress: 0 });
			} else if (anInput === 'CE') {
				this.setState({ inputsArr: [], toggleParenthesis: true, keyPress: null });
			} else if (anInput === '%') {
				this.setState({ inputsArr: [parseFloat(inputsArr.join('')) / 100] });
			}
		}
	}

	handleDisplayWidth() {
		const topWidth = document.getElementById('top').scrollWidth;
		const bottomWidth = document.getElementById('bottom').scrollWidth;
		this.setState({ scrollLength: topWidth + bottomWidth });
	}

	render() {
		const { demo, container } = style;
		const { inputsArr, allEntries, scrollLength } = this.state;
		return (
			<div className={demo}>
				<Helmet>
					<title>personalized clone iphone calculator</title>
					<link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300" rel="stylesheet" />
				</Helmet>
				<div className={container}>
					<Screen anEntry={inputsArr} entries={allEntries} overflow={scrollLength} />
					<Keypad inputKeys={INPUTS} operatorKeys={OPERATORS} onInput={this.handleClick} />
				</div>
			</div>
		);
	}
}

export default App;

const INPUTS = ['C', 'CE', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '( )', '.'];
const OPERATORS = ['÷', 'x', '-', '+', '='];
