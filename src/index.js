import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'components/App';

const enterHtml = document.getElementById('app');

render(
	<AppContainer>
		<App />
	</AppContainer>,
	enterHtml
);

if (module.hot) {
	module.hot.accept('components/App', () => {
		const NextApp = require('components/App').default;
		render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			enterHtml
		);
	});
}
