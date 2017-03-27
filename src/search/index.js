var title = require('title');
var page = require('page');
var $ = require('jquery');
import {getShows, searchShows} from '../api-tvmaze';
var template = require('./template');
var qs = require('qs');
page('/search', function (ctx, next) {
	title('TV - Search');

	var busqueda = qs.parse(ctx.querystring);
	//console.log(busqueda);
	searchShows(busqueda, function (res) {
		var shows = res.map(function (el) {
			return el.show;
		});	
		console.log(shows);
		$('#main-container').empty().append(template(shows))	
	})
})
