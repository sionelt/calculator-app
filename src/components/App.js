import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';
import Keypad from './Keypad';
import Screen from './Screen';

class App extends Component {
	constructor() {
		super();
		this.state = { allEntries: [] };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(entry) {
		this.setState(prevState => ({ allEntries: [...prevState.allEntries, entry] }));
		console.log(this.state.allEntries);
	}

	render() {
		const { demo, container } = style;
		const INPUTS = ['C', '<', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '()', '.'];
		const OPERATORS = ['/', 'x', '-', '+', '='];
		return (
			<div className={demo}>
				<Helmet>
					<title>improved clone iphone calculator</title>
					<link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300" rel="stylesheet" />
				</Helmet>
				<div className={container}>
					<Screen Entries={this.state.allEntries} />
					<Keypad allInputs={INPUTS} allOperators={OPERATORS} onInput={this.handleClick} />
				</div>
			</div>
		);
	}
}

export default App;
