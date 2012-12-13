if(!Array.prototype.unique) {
	Array.prototype.unique = function() {
		var used = {};

		return this.filter(function(a) {
			Array.prototype.unique_count++;

			if(used[a] === undefined) {
				used[a] = true;
				return true;

			} else {
				return false
			}
		});
	}
	Array.prototype.unique_count = 0;
}

module.exports = function(data) {
	var _punto = {
		"й":"q",
		"ц":"w",
		"у":"e",
		"к":"r",
		"е":"t",
		"н":"y",
		"г":"u",
		"ш":"i",
		"щ":"o",
		"з":"p",
		"х":"[",
		"ъ":"]",
		"ф":"a",
		"ы":"s",
		"в":"d",
		"а":"f",
		"п":"g",
		"р":"h",
		"о":"j",
		"л":"k",
		"д":"l",
		"ж":";",
		"э":"'",
		"ё":"\\",
		"я":"z",
		"ч":"x",
		"с":"c",
		"м":"v",
		"и":"b",
		"т":"n",
		"ь":"m",
		"б":",",
		"ю":".",

		"q":"й",
		"w":"ц",
		"e":"у",
		"r":"к",
		"t":"е",
		"y":"н",
		"u":"г",
		"i":"ш",
		"o":"щ",
		"p":"з",
		"[":"х",
		"]":"ъ",
		"a":"ф",
		"s":"ы",
		"d":"в",
		"f":"а",
		"g":"п",
		"h":"р",
		"j":"о",
		"k":"л",
		"l":"д",
		";":"ж",
		"'":"э",
		"ё":"\\",
		"z":"я",
		"x":"ч",
		"c":"с",
		"v":"м",
		"b":"и",
		"n":"т",
		"m":"ь",
		",":"б",
		".":"ю",
	};

	var _index = {};

	// init index
	data.forEach(function(str, id) {
		put(_index, str, 0, id);
	});


	function lettersAtPos(str, pos) {
		var variants = [];
		var letter = str.charAt(pos);

		variants.push(letter);

		var punto = _punto[letter];
		if(punto !== undefined) {
			variants.push(punto);
		}

		return variants;
	}

	function put(cache, str, pos, id) {
		lettersAtPos(str, pos).forEach(function(letter) {
			if(cache[letter] === undefined) {
				cache[letter] = {
					ids: [],
					cache: {}
				};
			}

			cache[letter].ids.push(id);

			if(pos + 1 < str.length) {
				put(cache[letter].cache, str, pos + 1, id);
			}
		})
	}

	function find(cache, str, pos) {
		var results = [];

		lettersAtPos(str, pos).forEach(function(letter) {
			if(cache[letter] !== undefined) {
				var res;

				if(pos + 1 == str.length) {
					res = cache[letter].ids;
				} else {
					res = find(cache[letter].cache, str, pos + 1);
				}

				results.push.apply(results, res);
			}
		});

		return results;
	}

	return {
		find: function(str) {
			return find(_index, str, 0).unique().map(function(id) {
				return data[id];
			});
		}
	}
}