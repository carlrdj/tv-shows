var express = require('express');
var app = express();

app.use(express.static('./dist'))

app.get('/', function (req, res) {
	res.render('index', { title: 'TV' });
})
app.get('/search', function (req, res) {
	res.render('index', { title: 'TV - Search' });
})

app.listen(3000, function (err) {
	if (err) { return console.log('Surgio un error'), process.exit(1);}
	console.log('Puerto 3000 Escuchando');
})
