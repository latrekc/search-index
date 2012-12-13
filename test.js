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
];


var index = require('./lib/search-index')(data);

data.forEach(function(str, i) {
	console.log(i, str);
})
console.log('')

console.log(index.find('abc'));
console.log('')







