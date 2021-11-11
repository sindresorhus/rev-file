import fs from 'node:fs';
import revisionHash from 'rev-hash';
import {revPath} from 'rev-path';
import hasha from 'hasha';

export async function revisionFile(path) {
	if (typeof path !== 'string') {
		throw new TypeError('Expected a string');
	}

	const hash = await hasha.fromFile(path, {algorithm: 'md5'});
	return revPath(path, hash.slice(0, 10));
}

export function revisionFileSync(path) {
	if (typeof path !== 'string') {
		throw new TypeError('Expected a string');
	}

	return revPath(path, revisionHash(fs.readFileSync(path)));
}
