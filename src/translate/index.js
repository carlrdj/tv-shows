if (!window.intl) {
	window.intl = require('intl');
	require('intl/locale-data/jsonp/en-US.js');
	require('intl/locale-data/jsonp/es.js');
}

var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
var IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/es.js');
require('intl-relativeformat/dist/locale-data/en.js');

var MESSAGE = [];
MESSAGE['es'] = require('./es');
MESSAGE['en-US'] = require('./en-US');

var locale = localStorage.locale || 'es';

module.exports = {
	message: function (text, opts) {
		opts = opts || {};
		var msg = new IntlMessageFormat(MESSAGE[locale][text], locale, null);
		return msg.format();
	},
	date: new IntlRelativeFormat(locale)
}