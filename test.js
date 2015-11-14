import test from 'ava';
import fn from './';

const reRevved = /test\-[\d\w]{10}\.js/;

test(async t => {
	t.true(reRevved.test(fn.sync('test.js')));
	t.true(reRevved.test(await fn('test.js')));
});
