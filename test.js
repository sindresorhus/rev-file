import test from 'ava';
import m from '.';

const reRevved = /test-[\d\w]{10}\.js/;

test(async t => {
	t.regex(m.sync('test.js'), reRevved);
	t.regex(await m('test.js'), reRevved);
});
