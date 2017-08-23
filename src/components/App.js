import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';
import Keypad from './Keypad';
import Screen from './Screen';

class App extends Component {
	constructor() {
		super();
		this.state = { inputsArr: [], allEntries: [], toggleParenthesis: true, scrollLength: null, keyPress: 0 };
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	componentWillMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress(event) {
		event.preventDefault();

		let uniCode = 0;
		event.which > 95 && event.which < 106 ? (uniCode = event.which - 48) : (uniCode = event.which - 64);

		this.setState({ keyPress: String.fromCharCode(uniCode) });
		this.setState(prevState => ({
			inputsArr: [...prevState.inputsArr, this.state.keyPress]
		}));
		console.log(event.which);
		console.log(uniCode);
	}

	handleClick(anInput) {
		const { inputsArr, keyPress, toggleParenthesis } = this.state;

		const topWidth = document.getElementById('top').scrollWidth;
		this.setState({ scrollLength: topWidth });

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

	render() {
		const { demo, container } = style;
		const { inputsArr, allEntries, scrollLength } = this.state;
		return (
			<div className={demo}>
				<Helmet>
					<title>improved clone iphone calculator</title>
					<link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300" rel="stylesheet" />
				</Helmet>
				<div className={container}>
					<Screen anEntry={inputsArr} entries={allEntries} overflow={scrollLength} />
					<Keypad inputKeys={INPUTS} operatorKeys={OPERATORS} onInput={this.handleClick} onKey={this.handleKeyPress} />
				</div>
			</div>
		);
	}
}

export default App;

const INPUTS = ['C', 'CE', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '( )', '.'];
const OPERATORS = ['/', 'x', '-', '+', '='];
