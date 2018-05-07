var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

var port = 3001;
app.listen(port);

//array of objects
var icecreams = [
    {name: "vanilla", price: 15,awesomeness: 10},
    {name: "chocolate", price: 15, awesomeness: 10},
    {name: "strawberry", price: 15,awesomeness: 10}
];

app.get('/', function (req, res) {
    res.render('icecream', {ics: icecreams});
});

app.get('/:name', function(req,res){
    for (var i=0; i <icecreams.length; i++){
        if(icecreams[i].name == req.params.name){
            // console.log(icecreams[i]);
            return res.render('icecream2', icecreams[i]);
        }
    }
});