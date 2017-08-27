import React, { Component } from 'react';
import style from 'styles/App.css';
import Keypad from './Keypad';
import Screen from './Screen';

class App extends Component {
	constructor() {
		super();

		this.state = {
			pendingEntry: '',
			activeEntry: '',
			allEntries: '',
			togglePlusMinus: true,
			isValidInput: false
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleNumberInputs = this.handleNumberInputs.bind(this);
		this.handleErrorInput = this.handleErrorInput.bind(this);
		this.handlePlusMinusInput = this.handlePlusMinusInput.bind(this);
		this.handlePercentageInput = this.handlePercentageInput.bind(this);
		this.handleClearEntry = this.handleClearEntry.bind(this);
		this.handleClearGlobal = this.handleClearGlobal.bind(this);
		this.handleCalculation = this.handleCalculation.bind(this);
		this.handleEqualToDisplay = this.handleEqualToDisplay.bind(this);
		this.handleArithmeticsDisplay = this.handleArithmeticsDisplay.bind(this);
	}

	handleClick(anInput) {
		const { pendingEntry, activeEntry, allEntries, togglePlusMinus, isValidInput } = this.state;

		if (INPUTS.includes(anInput)) {
			switch (true) {
				case NUMBER_INPUTS.includes(anInput):
					this.handleNumberInputs(anInput);
					break;
				case anInput === '±':
					!isValidInput ? this.handleErrorInput() : this.handlePlusMinusInput(togglePlusMinus);
					break;
				case anInput === '%':
					!isValidInput ? this.handleErrorInput() : this.handlePercentageInput(activeEntry);
					break;
				case anInput === 'CE':
					this.handleClearEntry();
					break;
				default:
					this.handleClearGlobal();
			}
		} else {
			!isValidInput || !pendingEntry
				? this.handleErrorInput()
				: (
						this.handleCalculation(activeEntry),
						anInput === '=' ? this.handleEqualToDisplay() : this.handleArithmeticsDisplay(activeEntry, anInput)
					);
		}
	}

	/*-- HANDLE AN ENTRY --*/
	handleNumberInputs(anInput) {
		this.setState(prevState => ({
			// substr() limit an entry to 9 digits; 8 previous + 1 current
			pendingEntry: (prevState.pendingEntry + anInput).substr(0, 9)
		}));
		// this setState sync the pendingEntry above so bottom display is updated anew on every entry
		this.setState(state => ({
			// toLocaleString() format entries with comma.
			activeEntry: parseFloat(state.pendingEntry).toLocaleString(),
			isValidInput: true
		}));
	}

	/*-- HANDLE INVALID INPUT --*/
	handleErrorInput() {
		this.setState(prevState => ({
			allEntries: prevState.allEntries,
			activeEntry: prevState.activeEntry
		}));
	}

	/*-- HANDLE TOGGLING ACTIVE ENTRY PLUS/MINUS --*/
	handlePlusMinusInput(togglePlusMinus) {
		togglePlusMinus
			? this.setState(prevState => ({
					activeEntry: '-' + prevState.activeEntry,
					togglePlusMinus: false,
					isValidInput: true,
					pendingEntry: prevState.activeEntry
				}))
			: this.setState(prevState => ({
					activeEntry: prevState.pendingEntry,
					togglePlusMinus: true,
					isValidInput: true
				}));
	}

	/*-- HANDLE CONVERTING ACTIVE ENTRY INTO PERCENTAGE --*/
	handlePercentageInput(activeEntry) {
		this.setState({
			activeEntry: (parseFloat(activeEntry.replace(/,/g, '')) / 100).toLocaleString()
		});
	}

	/*-- HANDLE CLEARING ONLY THE ACTIVE ENTRY --*/
	handleClearEntry() {
		this.setState({
			pendingEntry: '',
			activeEntry: '',
			togglePlusMinus: true,
			isValidInput: false
		});
	}

	/*-- HANDLE CLEARING ALL ENTRIES --*/
	handleClearGlobal() {
		this.setState({
			pendingEntry: '',
			activeEntry: '',
			allEntries: '',
			togglePlusMinus: true,
			isValidInput: false
		});
	}

	/*-- HANDLE THE EVALUATION OF CALCULATION --*/
	handleCalculation(activeEntry) {
		this.setState(prevState => ({
			activeEntry: eval(
				// replace all occurances commas, x and ÷.
				(prevState.allEntries + activeEntry).replace(/,/g, '').replace(/x/g, '*').replace(/÷/g, '/')
			).toLocaleString(),
			// resetting to start anew a new entry without carrying over displayed answers.
			pendingEntry: '',
			isValidInput: true
		}));
	}

	/*-- HANDLE THE FINAL EQUATED ENTRY --*/
	handleEqualToDisplay() {
		this.setState({ allEntries: '' });
	}

	/*-- HANDLE ALL ARITHMETICS ENTRIES --*/
	handleArithmeticsDisplay(activeEntry, anInput) {
		this.setState(prevState => ({
			allEntries: prevState.allEntries + activeEntry + anInput
		}));
	}

	render() {
		const { demo, container } = style;
		const { activeEntry, allEntries, isValidInput } = this.state;

		return (
			<div className={demo}>
				<div className={container}>
					<Screen entry={activeEntry} entries={allEntries} validInput={isValidInput} />
					<Keypad inputKeys={INPUTS} operatorKeys={OPERATORS} onInput={this.handleClick} />
				</div>
			</div>
		);
	}
}

const INPUTS = ['C', 'CE', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '±'];
const NUMBER_INPUTS = INPUTS.filter(input => !isNaN(input));
const OPERATORS = ['÷', 'x', '-', '+', '='];

export default App;
