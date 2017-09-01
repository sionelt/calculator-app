import React, { Component } from 'react';
import style from 'styles/App.css';
import Keypad from './Keypad';
import Screen from './Screen';

const INPUTS = ['C', 'CE', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '±'];
const NUMBER_INPUTS = INPUTS.filter(input => !isNaN(input));
const OPERATORS = ['÷', 'x', '-', '+', '='];

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
		this.handleDecimalInput = this.handleDecimalInput.bind(this);
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
				case anInput === '.':
					this.handleDecimalInput(anInput);
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
						anInput === '='
							? this.handleEqualToDisplay(activeEntry)
							: this.handleArithmeticsDisplay(activeEntry, anInput, pendingEntry)
					);
		}
	}

	/*-- HANDLE AN ENTRY --*/
	handleNumberInputs(anInput) {
		this.setState(
			prevState =>
				// substr() limit an entry to 9 digits; 8 previous + 1 current
				prevState.pendingEntry.includes('.')
					? { pendingEntry: (prevState.pendingEntry + anInput).substr(0, 10) }
					: { pendingEntry: (prevState.pendingEntry + anInput).substr(0, 9) }
		);

		// this setState sync the pendingEntry above so bottom display is updated anew on every entry
		this.setState(state => ({
			// toLocaleString() format entries with comma and decimals max at 8.
			activeEntry: parseFloat(state.pendingEntry).toLocaleString(undefined, { maximumFractionDigits: 8 }),
			isValidInput: true
		}));
	}

	/*-- HANDLE DECIMAL INPUT --*/
	handleDecimalInput(anInput) {
		this.setState(
			prevState =>
				!prevState.pendingEntry
					? {
							activeEntry: '0' + anInput,
							pendingEntry: prevState.pendingEntry + anInput,
							isValidInput: true
						}
					: {
							activeEntry: prevState.pendingEntry + anInput,
							pendingEntry: prevState.pendingEntry + anInput,
							isValidInput: true
						}
		);
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
			activeEntry: (parseFloat(activeEntry.replace(/,/g, '')) / 100).toLocaleString(undefined, {
				maximumFractionDigits: 8
			})
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
				// replace all occurances commas, x and ÷ for valid eval().
				(prevState.allEntries + activeEntry).replace(/,/g, '').replace(/x/g, '*').replace(/÷/g, '/')
			).toLocaleString(undefined, { maximumFractionDigits: 8 }),
			isValidInput: true
		}));
	}

	/*-- HANDLE THE FINAL EQUATED ENTRY --*/
	handleEqualToDisplay(activeEntry) {
		this.setState({ allEntries: '', pendingEntry: activeEntry });
	}

	/*-- HANDLE ALL ARITHMETICS ENTRIES --*/
	handleArithmeticsDisplay(activeEntry, anInput) {
		this.setState(prevState => ({
			allEntries: prevState.allEntries + activeEntry + anInput,
			pendingEntry: ''
		}));
	}

	render() {
		const { demo, container } = style;
		const { activeEntry, allEntries, isValidInput } = this.state;

		return (
			<div className={container}>
				<Screen entry={activeEntry} entries={allEntries} validInput={isValidInput} />
				<Keypad inputKeys={INPUTS} operatorKeys={OPERATORS} onInput={this.handleClick} />
			</div>
		);
	}
}

export default App;
