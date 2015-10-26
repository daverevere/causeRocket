
var User = require('../models/users')


var createUser = function(req, res){


	var newUser = new User({
		name			: req.body.name,
		city			: req.body.city

	})

	newUser.save( function(err, doc){
		res.send(doc)
	} )

}

var findUsers = function(req, res) {

	if (req.params.userName){
		User.findOne({name : req.params.userName}, function(err, doc){
			res.send(doc)
		})
	}
	else{

		User.find({}, function(err, docs){
			res.send(docs)

		})
	}

}

module.exports = {
	createUser : createUser,
	findUsers : findUsers,
}