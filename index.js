'use strict';
const fs = require('fs');
const revHash = require('rev-hash');
const revPath = require('rev-path');
const hasha = require('hasha');

module.exports = pth => {
	if (typeof pth !== 'string') {
		throw new TypeError('Expected a string');
	}

	return hasha.fromFile(pth, {algorithm: 'md5'})
		.then(hash => revPath(pth, hash.slice(0, 10)));
};

module.exports.sync = pth => {
	if (typeof pth !== 'string') {
		throw new TypeError('Expected a string');
	}

	return revPath(pth, revHash(fs.readFileSync(pth)));
};
