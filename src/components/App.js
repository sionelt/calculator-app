import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';
import Keypad from './Keypad';
import Screen from './Screen';

class App extends Component {
	constructor() {
		super();
		this.state = {
			anEntry: '',
			displayAnEntry: '',
			displayAllEntries: '',
			toggleParenthesis: true,
			scrollLength: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleDisplayWidth = this.handleDisplayWidth.bind(this);
		this.handleEvaluation = this.handleEvaluation.bind(this);
	}

	/*--CLICK HANDLER-------------------------------------------------------------*/
	handleClick(anInput) {
		const { anEntry, displayAnEntry, displayAllEntries, toggleParenthesis } = this.state;

		this.handleDisplayWidth();

		if (anInput === '( )') {
			toggleParenthesis
				? this.setState(prevState => ({
						displayAllEntries: prevState.displayAllEntries + '(',
						toggleParenthesis: false,
						anEntry: ''
					}))
				: this.setState(prevState => ({
						displayAllEntries: prevState.displayAllEntries + inputsArr + ')',
						toggleParenthesis: true,
						anEntry: ''
					}));
		} else {
			if (anInput === 'C') {
				this.setState({
					anEntry: '',
					displayAnEntry: '',
					displayAllEntries: '',
					toggleParenthesis: true,
					scrollLength: 0
				});
			} else if (anInput === 'CE') {
				this.setState({
					anEntry: '',
					displayAnEntry: '',
					toggleParenthesis: true
				});
			} else if (anInput === '%') {
				this.setState(prevState => ({
					displayAnEntry: (parseFloat(displayAnEntry.replace(/,/g, '')) / 100).toLocaleString()
				}));
			} else if (INPUTS.includes(anInput)) {
				this.setState(prevState => ({
					// substr() limit an entry to 9 digits; 8 previous + 1 current
					anEntry: prevState.anEntry.substr(0, 8) + anInput
				}));

				// this setState sync the anEntry above.
				this.setState(state => ({
					// toLocaleString() format entries with comma.
					displayAnEntry: parseFloat(state.anEntry).toLocaleString()
				}));
			} else if (OPERATORS.includes(anInput)) {
				if (!anEntry) {
					// opt as invalid in Screen module.
					this.setState({ displayAllEntries: anInput });
				} else if (anInput === '=') {
					// evaluate at equal operator.
					this.handleEvaluation(displayAnEntry);
					this.setState({ displayAllEntries: '' });
				} else {
					// evaluate at arithmetic operators
					this.handleEvaluation(displayAnEntry);
					this.setState(prevState => ({
						displayAllEntries: prevState.displayAllEntries + displayAnEntry + anInput
					}));
				}
			}
		}
	}

	/*---HANDLE THE EVALUATION OF CALCULATION----------------------------------------*/
	handleEvaluation(displayAnEntry) {
		this.setState(prevState => ({
			displayAnEntry: eval(
				(prevState.displayAllEntries + displayAnEntry).replace(/,/g, '').replace('x', '*').replace('÷', '/')
			).toLocaleString(),
			anEntry: ''
		}));
	}

	/*---HANDLE REAL-TIME COMBINED WIDTH OF BOTH DISPLAYS-------------------------------------*/
	handleDisplayWidth() {
		const topWidth = document.getElementById('top').scrollWidth;
		const bottomWidth = document.getElementById('bottom').scrollWidth;
		this.setState({ scrollLength: topWidth + bottomWidth });
	}

	render() {
		const { demo, container } = style;
		const { displayAnEntry, displayAllEntries, scrollLength, equalTo } = this.state;
		return (
			<div className={demo}>
				<Helmet>
					<title>personalized clone iphone calculator</title>
					<link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300" rel="stylesheet" />
				</Helmet>
				<div className={container}>
					<Screen entry={displayAnEntry} entries={displayAllEntries} overflow={scrollLength} evaluate={equalTo} />
					<Keypad inputKeys={INPUTS} operatorKeys={OPERATORS} onInput={this.handleClick} />
				</div>
			</div>
		);
	}
}

export default App;

const INPUTS = ['C', 'CE', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '( )', '.'];
const OPERATORS = ['÷', 'x', '-', '+', '='];
