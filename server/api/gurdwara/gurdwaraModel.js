var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GurdwaraSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	address: {
		type: String, 
		required: true,
		unique: true
	},
	city: {
		type: String, 
		required: true
	},
	state: {
		type: String,
		required: true
	},
	zipcode: {
		type: Number
	},
	country: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: Number,
		required: true
	},
	email: {
		type: String
	}
});

module.exports = mongoose.model('gurdwara', GurdwaraSchema);