// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

const renderApp = () => {
	render(
		<BrowserRouter>
			<App userAgent={navigator.userAgent} />
		</BrowserRouter>,
		document.getElementById('app')
	);
};
renderApp();

if (module.hot) {
	module.hot.accept('./components/App', () => {
		renderApp();
	});
}
