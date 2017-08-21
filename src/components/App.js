import React from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';

const App = () => {
	const { demo, container, display, keypad, keys, aKey, operators, aOperator } = style;
	const KEYS = ['C', '<', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '()', '.'];
	const OPERATORS = ['/', 'X', '-', '+', '='];
	return (
		<div>
			<Helmet>
				<title>improved clone iphone calculator</title>
				<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500" rel="stylesheet" />
				<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
			</Helmet>
			<div className={demo}>
				<div className={container}>
					<div className={display}>123</div>
					<div className={keypad}>
						<ul className={keys}>
							{KEYS.map(key =>
								<li key={key} className={aKey}>
									{key}
								</li>
							)}
						</ul>
						<ul className={operators}>
							{OPERATORS.map(op =>
								<li key={op} className={aOperator}>
									{op}
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
