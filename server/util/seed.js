var Gurdwara = require('../api/gurdwara/gurdwaraModel');
var _ = require('lodash');
var logger = require('./logger');

logger.log('Seeding the Database');

var gurdwaras = [
	{
		name: "Gur Nanak Parkash Tracy",
		address: "16101 W Grant Line Rd",
		city: "Tracy",
		state: "California",
		zipcode: 95304,
		country: "USA",
		phoneNumber: 2093464270,
		email: "gnpt@gurdwara.com"
	},
	{
		name: "Gurdwara Sahib Tracy",
		address: "11770 W Clover Rd",
		city: "Tracy",
		state: "California",
		zipcode: 95304,
		country: "USA",
		phoneNumber: 2098362215,
		email: "gst@gurdwara.com"
	},
	{
		name: "Gurdwara Gurmat Parkash Manteca",
		address: "4640 Woodward Ave",
		city: "Manteca",
		state: "California",
		zipcode: 95337,
		country: "USA",
		phoneNumber: 2098244433,
		email: "ggpm@gurdwara.com"
	}
];

var createDoc = function(model, doc) {
	return new Promise(function(resolve, reject) {
		new model(doc).save(function(err, saved) {
			return err ? reject(err) : resolve(saved);
		});
	});
};

var cleanDB = function() {
	logger.log('... cleaning the DB');
	var cleanPromises = [Gurdwara]
		.map(function(model) {
			return model.remove().exec();
		});
	return Promise.all(cleanPromises);
};

var createGurdwaras = function(data) {
	var promises = gurdwaras.map(function(gurdwara) {
		return createDoc(Gurdwara, gurdwara);
	});

	return Promise.all(promises) 
		.then(function(gurdwaras) {
			return _.merge({gurdwaras: gurdwaras}, data || {});
		});
};

cleanDB()
	.then(createGurdwaras)
	.then(logger.log.bind(logger))
	.catch(logger.log.bind(logger));