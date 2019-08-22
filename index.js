const express = require('express'),
      app = express();

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 8081

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('*', function(req, res){
  res.redirect('/');
})

app.listen(3000, function(){
  console.log('App listening on port 3000!')
});