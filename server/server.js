var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');
var logger = require('./util/logger');

require('mongoose').connect(config.db.url);

if(config.seed) {
	require('./util/seed');
}

require('./middleware/appMiddleware')(app);

app.use('/api', api);

app.use(function(err, req, res, next) {
	logger.error(err.stack);
	res.status(500).send('Oops');
});

if(process.env.NODE_ENV === config.test) {
	app.listen(config.port);
	logger.log('listening on http://localhost: ' + config.port);
}

module.exports = app;	

