// @flow

import React from 'react';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Complete from './Complete';
import preload from '../../data.json';

const FourOhFour = () => <h1>404</h1>;

const networkInterface = createNetworkInterface({ uri: 'http://localhost:3001/graphql' });

const client = new ApolloClient({
	networkInterface
});

const App = () => (
	<ApolloProvider client={client}>
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
	</ApolloProvider>
);

export default App;
