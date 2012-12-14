var data = [
	'a',
	'ab',
	'abc',
	'abcd',

	'ф',
	'фи',
	'фис',
	'фисв',

	'а',
	'аб',
	'абв',
	'абвг',

	'xthysq',
	'черный',
	'чёрный',

	'ifgjdfk',
	'shapoval',
	'shapoval',
	'shkinev',
	'шаповал',

	'shkinev',
];

console.time('create index');
var index = require('./lib/search-index')(data);
console.timeEnd('create index');

data.forEach(function(str, i) {
	console.log(i, str);
})
console.log('')

console.time('find');
console.log(index.find('abc'));
console.log(index.find('чер'));
console.log(index.find('ш'));
console.log(index.find('шaповал'));
console.log('')
console.timeEnd('find');

console.log(index.debug());