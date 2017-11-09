module.exports = function() {
	return function(err, req, res, next) {
		console.log('This is the ' + err.stack);
		res.status(500);
	};
}