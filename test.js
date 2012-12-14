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

var index = SearchIndex(data);

data.forEach(function(str, i) {
	console.log(i, str);
})
console.log('')

console.log(index.find('abc'));
console.log(index.find('чер'));
console.log(index.find('ш'));
console.log(index.find('шaповал'));
console.log('')
console.dir(index.cache());






