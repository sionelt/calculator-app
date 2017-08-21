import React from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';

const App = () => {
	const { demo, container, display, keypad, keys, operators } = style;
	return (
		<div>
			<Helmet>
				<title>sionelt site</title>
				<link href={favicon} rel="shortcut icon" type="image/png" />
				<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500" rel="stylesheet" />
				<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
			</Helmet>
			<div className={demo}>
				<div className={container}>
					<div className={display}>123</div>
					<div className={keypad}>
						<ul className={keys}>
							{keys.map(key => <li key={key}>key</li>)}
						</ul>
						<ul className={operators}>
							{operators.map(op => <li key={op}>op</li>)}
							<li>hellow</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

const keys = ['C', '<', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '()', '.'];
const operators = ['/', 'X', '-', '+', '='];
