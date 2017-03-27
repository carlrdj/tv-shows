var yo = require('yo-yo');
var card = require('../card');
var layout = require('../layout');
module.exports = function (shows) {
	var el = yo`
	${shows.map(function (show) {
		return card(show);
	})}
	`;


	return layout(el)
}