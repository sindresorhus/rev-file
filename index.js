'use strict';
var fs = require('fs');
var revHash = require('rev-hash');
var revPath = require('rev-path');
var hasha = require('hasha');

module.exports = function (pth, cb) {
	if (typeof pth !== 'string') {
		throw new TypeError('Expected a string');
	}

	hasha.fromFile(pth, {algorithm: 'md5'}, function (err, hash) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, revPath(pth, hash.slice(0, 10)));
	});
};

module.exports.sync = function (pth) {
	if (typeof pth !== 'string') {
		throw new TypeError('Expected a string');
	}

	return revPath(pth, revHash(fs.readFileSync(pth)));
};
