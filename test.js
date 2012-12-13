var data = [
	'a',
	'ab',
	'abc',
	'abcd',
	'abcde',

	'а',
	'аб',
	'абв',
	'абвг',
	'абвгд'
];


var mainCache = {};

function putInCache(cache, str, pos, id) {
	var letter = str.charAt(pos);

	if(cache[letter] === undefined) {
		cache[letter] = {
			ids: [],
			cache: {}
		};
	}

	cache[letter].ids.push(id);

	if(pos + 1 < str.length) {
		putInCache(cache[letter].cache, str, pos + 1, id);
	}
}

function findInCache(cache, query, pos) {
	var letter = query.charAt(pos);

	if(cache[letter] !== undefined) {
		if(pos + 1 == query.length) {
			return cache[letter].ids;

		} else {
			return findInCache(cache[letter].cache, query, pos + 1);
		}

	} else {
		return [];
	}
}

data.forEach(function(str, id) {
	putInCache(mainCache, str, 0, id)
})


console.log(data);
console.log('')

console.log(require('util').inspect(mainCache, false, null));
console.log(findInCache(mainCache, 'abc', 0));







