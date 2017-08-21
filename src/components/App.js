import React from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';
import Keypad from './Keypad';
import Screen from './Screen';

const App = () => {
	const { demo, container } = style;

	return (
		<div>
			<Helmet>
				<title>improved clone iphone calculator</title>
				<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
			</Helmet>
			<div className={demo}>
				<div className={container}>
					<Screen />
					<Keypad />
				</div>
			</div>
		</div>
	);
};

export default App;
