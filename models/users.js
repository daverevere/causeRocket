var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

	name			: {type : String},
	zip				: {type : Number}


});

module.exports = mongoose.model('User', userSchema);
