
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

function deleteUsers (req,res) {
	User.remove({}, function(err) { //must have a function call here
		//remove is a method in mongoose to remove contents of a collection
		//the brackets are empty because we're saying delete all of the collection's contents, not just a specific property
	   
	});
	
}


module.exports = {
	createUser : createUser,
	findUsers : findUsers,
	deleteUsers : deleteUsers
}