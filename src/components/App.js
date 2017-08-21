import React from 'react';
import { Helmet } from 'react-helmet';
import style from 'styles/globals.css';

const App = () => {
	const { demo, container, display, keypad } = style;
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
					<ul className={keypad}>
						<li>hellow</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default App;
