import React from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';
import Keypad from './Keypad';
import Screen from './Screen';

const App = () => {
	const { demo, container } = style;

	return (
		<div className={demo}>
			<Helmet>
				<title>improved clone iphone calculator</title>
				<link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300" rel="stylesheet" />
			</Helmet>
			<div className={container}>
				<Screen />
				<Keypad />
			</div>
		</div>
	);
};

export default App;
