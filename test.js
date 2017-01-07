import test from 'ava';
import m from './';

const reRevved = /test-[\d\w]{10}\.js/;

test(async t => {
	t.true(reRevved.test(m.sync('test.js')));
	t.true(reRevved.test(await m('test.js')));
});
