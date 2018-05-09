/**
 Saves data to a file. This appears to the user as if they had clicked a link
 to a downloadable file in their browser. If no failure method is specified,
 then this will show a UI notification when errors occur.

 @module file/save
 @param {String} data data to save
 @param {String} filename filename to save to
 @param {Function} success callback function on a successful save, optional
 @param {Function} failure callback function on a failed save (passed error),
	optional
**/

'use strict';
const JSZip = require('jszip');
const saveAs = require('browser-saveas');
const { oniOS, onSafari } = require('../ui');
const locale = require('../locale');
const notify = require('../ui/notify');
const Share = require('./share');
const store = require('../data/store');
require('blob-polyfill');

module.exports = (data, filename, success, failure) => {
	try {
		var xhr= new XMLHttpRequest();
		xhr.open('POST', 'http://localhost:8000/story/', true);

		
		xhr.onreadystatechange= function() {
			if (this.readyState!==4) return;
			if (this.status!==200) return; // or whatever error handling you want
			//console.log(this.responseText)

			let shareModal = new Share({
								store
							}).$mountTo(document.body);

			shareModal.changeUrl(this.responseText)

		}
		xhr.setRequestHeader('Content-type', 'text/plain; charset=ISO-8859-1');		
		xhr.send(data);

	}
	catch (e) {
		if (failure) {
			failure(e);
		}
		else {
			notify(
				locale.say(
					'Something went wront (%1$s).',
					e.message
				),
				'danger'
			);
		}
	};
};
