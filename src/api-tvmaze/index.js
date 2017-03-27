var $ = require('jquery');

export function getShows(fn) {
	$.ajax({
		url: 'http://api.tvmaze.com/shows',
		success: function (shows, status, jx) {
			fn(shows);
		}
	})
}

export function searchShows(busqueda, fn) {
	$.ajax({
		url: 'http://api.tvmaze.com/search/shows',
		data: busqueda,
		success: function (res, status, jx) {
			fn(res);
		}
	})
}
