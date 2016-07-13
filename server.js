var express = require('express');
var index = require('./routes/index');
var app = express();

app.use(express.static('public'));

app.use('/', index);

app.get('/pets', function(request, response){
  var pets = [{name:'Sweet Dee'}, {name:'Charlie'}, {name:'Scully'}, {name:'Blanche'}, {name:'Tito'}, {name:'Cleopatra'}, {name:'Samus'}];
  console.log(pets);
  response.send(pets);
})

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Server running on port', port);
})
