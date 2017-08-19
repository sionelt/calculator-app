import React from 'react';
import { Helmet } from 'react-helmet';

const App = () =>
	<div>
		<Helmet>
			<title>sionelt site</title>
			<link href={favicon} rel="shortcut icon" type="image/png" />
			<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500" rel="stylesheet" />
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
		</Helmet>
		<h1>malo lelei tonga</h1>
	</div>;

export default App;
