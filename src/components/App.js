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
			evaluateEntries: '',
			toggleParenthesis: true,
			scrollLength: 0,
			equalTo: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleDisplayWidth = this.handleDisplayWidth.bind(this);
	}

	/*--CLICK HANDLER-------------------------------------------------------------*/
	handleClick(anInput) {
		const { anEntry, displayAnEntry, displayAllEntries, evaluateEntries, equalTo, toggleParenthesis } = this.state;

		this.handleDisplayWidth();

		// this.setState({ displayAnEntry: '' });

		if (anInput === '( )') {
			this.setState(prevState => ({ anEntry: prevState.anEntry }));

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
					evaluateEntries: '',
					displayAllEntries: '',
					toggleParenthesis: true,
					scrollLength: 0,
					equalTo: 0
				});
			} else if (anInput === 'CE') {
				this.setState({
					anEntry: '',
					displayAnEntry: '',
					toggleParenthesis: true,
					equalTo: false
				});
			} else if (anInput === '%') {
				this.setState(prevState => ({
					displayAllEntries: prevState.displayAllEntries + (parseFloat(anEntry) / 100).toString(),
					anEntry: ''
				}));
			} else if (INPUTS.includes(anInput)) {
				this.setState(prevState => ({
					anEntry: prevState.anEntry.substr(0, 8) + anInput
				}));
				this.setState(state => ({
					displayAnEntry: parseFloat(state.anEntry).toLocaleString() // sync the anEntry above
				}));
			} else if (OPERATORS.includes(anInput)) {
				if (anInput === '=') {
					this.setState(prevState => ({
						displayAllEntries: '',
						displayAnEntry: eval(
							(prevState.displayAllEntries + displayAnEntry).replace(/,/g, '').replace('x', '*').replace('÷', '/')
						).toLocaleString(),
						anEntry: ''
					}));
				} else {
					this.setState(prevState => ({
						displayAllEntries: prevState.displayAllEntries + displayAnEntry + anInput,
						displayAnEntry: eval(
							(prevState.displayAllEntries + displayAnEntry).replace(/,/g, '').replace('x', '*').replace('÷', '/')
						).toLocaleString(),
						anEntry: ''
					}));

					console.log(evaluateEntries);
				}
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
