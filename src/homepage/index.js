var title = require('title');
var page = require('page');
var $ = require('jquery');
import {getShows, searchShows} from '../api-tvmaze';
var template = require('./template');
page('/', function (ctx, next) {
	title('TV');
	getShows(function (shows) {
		$('#main-container').empty().append(template(shows))	
	})
})
