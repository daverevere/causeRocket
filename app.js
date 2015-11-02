
var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adventure')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var userCtrl = require('./controllers/userCtrl')

app.get('/', function(req, res){
  res.sendFile('/html/index.html', {root : './public'})
});

app.post('/api/users', userCtrl.createUser)
app.get('/api/users', userCtrl.findUsers)
app.get('/api/users/:userName', userCtrl.findUsers)

var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});
