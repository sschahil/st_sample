// @flow

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Home from './Home';
import Complete from './Complete';
import preload from '../../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
	<MuiThemeProvider
		muiTheme={getMuiTheme({ userAgent: (typeof navigator !== 'undefined' && navigator.userAgent) || 'all' })}
	>
		<div className="app">
			<Switch>
				<Route exact path="/" component={props => <Home gurdwaras={preload.gurdwaras} {...props} />} />
				<Route path="/complete" component={Complete} />
				<Route component={FourOhFour} />
			</Switch>
		</div>
	</MuiThemeProvider>
);

export default App;
