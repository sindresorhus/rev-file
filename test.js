import test from 'ava';
import {revisionFile, revisionFileSync} from './index.js';

const revisionRegex = /test-[\d\w]{10}\.js/;

test('async', async t => {
	t.regex(await revisionFile('test.js'), revisionRegex);
});

test('sync', t => {
	t.regex(revisionFileSync('test.js'), revisionRegex);
});
