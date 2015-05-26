'use strict';
var test = require('ava');
var revFile = require('./');
var reRevved = /test\-[\d\w]{10}\.js/;

test('async', function (t) {
	t.plan(3);

	t.assert(reRevved.test(revFile.sync('test.js')));

	revFile('test.js', function (err, filepath) {
		t.assert(!err, err);
		t.assert(reRevved.test(filepath));
	});
});
