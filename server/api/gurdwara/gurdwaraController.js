var Gurdwara = require('./gurdwaraModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
	Gurdwara.findById(id)
		.then(function(gurdwara) {
			if(!gurdwara) {
				next(new Error('No gurdwara with that id'));
			} else {
				req.gurdwara = gurdwara;
				next();
			}
		}, function(err) {
			next(err);
		});
};

exports.get = function(req, res, next) {
	Gurdwara.find({})
		.then(function(gurdwaras) {
			res.json(gurdwaras);
		}, function(err) {
			next(err);
		});
};

exports.getOne = function(req, res, next) {
	var gurdwara = req.gurdwara;
	res.json(gurdwara);
};

exports.put = function(req, res, next) {
	var gurdwara = req.gurdwara;

	var update = req.body;

	_.merge(gurdwara, update);

	gurdwara.save(function(err, saved) {
		if(err) {
			next(err);
		} else {
			res.json(saved);
		}
	})
};

exports.post = function(req, res, next) {
	var newgurdwara = req.body;

	Gurdwara.create(newgurdwara) 
		.then(function(gurdwara) {
			res.json(gurdwara);
		}, function(err) {
			next(err);
		});
};

exports.delete = function(req, res, next) {
	req.gurdwara.remove(function(err, removed) {
		if(err) {
			next(err);
		} else {
			res.json(removed);
		}
	});
};