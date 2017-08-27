
  // /*--CLICK HANDLER-------------------------------------------------------------*/
	// handleClick(anInput) {
	// 	const { pendingEntry, displayActiveEntry, displayAllEntries, togglePlusMinus, isValid } = this.state;

	// 	if (anInput === '±') {
	// 		// Condition when to append - sign.
	// 		if (!pendingEntry) {
	// 			this.setState(prevState => ({
	// 				displayAllEntries: prevState.displayAllEntries,
	// 				displayActiveEntry: prevState.displayActiveEntry
	// 			}));
	// 		} else {
	// 			togglePlusMinus
	// 				? this.setState(prevState => ({
	// 						displayActiveEntry: '-' + prevState.displayActiveEntry,
	// 						togglePlusMinus: false,
	// 						isValid: false,
	// 						pendingEntry: prevState.displayActiveEntry
	// 					}))
	// 				: this.setState(prevState => ({
	// 						displayActiveEntry: prevState.pendingEntry,
	// 						togglePlusMinus: true
	// 					}));
	// 		}
	// 	} else if (anInput === 'C') {
	// 		// reset both displays.
	// 		this.setState({
	// 			pendingEntry: '',
	// 			displayActiveEntry: '',
	// 			displayAllEntries: '',
	// 			togglePlusMinus: true,
	// 			isValid: false
	// 		});
	// 	} else if (anInput === 'CE') {
	// 		// reset only the bottom display
	// 		this.setState({
	// 			pendingEntry: '',
	// 			displayActiveEntry: '',
	// 			togglePlusMinus: true,
	// 			isValid: false
	// 		});
	// 	} else if (anInput === '%') {
	// 		// convert an entry to percentage decimal.
	// 		if (!pendingEntry) {
	// 			this.setState(prevState => ({
	// 				displayAllEntries: prevState.displayAllEntries,
	// 				displayActiveEntry: prevState.displayActiveEntry
	// 			}));
	// 		} else {
	// 			this.setState(prevState => ({
	// 				displayActiveEntry: (parseFloat(displayActiveEntry.replace(/,/g, '')) / 100).toLocaleString()
	// 			}));
	// 		}
	// 	} else if (INPUTS.includes(anInput)) {
	// 		this.setState(prevState => ({
	// 			// substr() limit an entry to 9 digits; 8 previous + 1 current
	// 			pendingEntry: (prevState.pendingEntry + anInput).substr(0, 9)
	// 		}));

	// 		// this setState sync the pendingEntry above so bottom display is updated anew on every entry
	// 		this.setState(state => ({
	// 			// toLocaleString() format entries with comma.
	// 			displayActiveEntry: parseFloat(state.pendingEntry).toLocaleString()
	// 		}));
	// 	} else if (OPERATORS.includes(anInput)) {
	// 		if (!pendingEntry && !isValid) {
	// 			// no updates on Screen when its an invalid input.
	// 			this.setState(prevState => ({
	// 				displayAllEntries: prevState.displayAllEntries,
	// 				displayActiveEntry: prevState.displayActiveEntry
	// 			}));
	// 		} else if (anInput === '=') {
	// 			// evaluate at equal operator.
	// 			this.handleEvaluation(displayActiveEntry);
	// 			this.setState({ displayAllEntries: '', isValid: true });
	// 		} else {
	// 			// evaluate at arithmetic operators curryingly.
	// 			this.handleEvaluation(displayActiveEntry);
	// 			// set state for top display apart from evaluation for valid calculation.
	// 			this.setState(prevState => ({
	// 				displayAllEntries: prevState.displayAllEntries + displayActiveEntry + anInput,
	// 				isValid: false
	// 			}));
	// 		}
	// 	}
	// }

	// /*---HANDLE THE EVALUATION OF CALCULATION----------------------------------------*/
	// handleEvaluation(displayActiveEntry) {
	// 	this.setState(prevState => ({
	// 		displayActiveEntry: eval(
	// 			// replace all occurances commas, x and ÷.
	// 			(prevState.displayAllEntries + displayActiveEntry).replace(/,/g, '').replace(/x/g, '*').replace(/÷/g, '/')
	// 		).toLocaleString(),
	// 		// resetting to start anew a new entry without carrying over displayed answers.
	// 		pendingEntry: ''
	// 	}));
	// }