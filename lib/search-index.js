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

var SearchIndex = function(data) {
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

	var _translit = {
		"1": {
			'а':['a'],
			'б':['b'],
			'в':['v'],
			'г':['g'],
			'д':['d'],
			'е':['je','ye','e', 'jo','yo'],
			'ё':['jo','yo','e', 'je','ye'],
			'ж':['zh'],
			'з':['s','z'],
			'и':['i'],
			'й':['jj','g','i','j','y'],
			'к':['c','k'],
			'л':['l'],
			'м':['m'],
			'н':['n'],
			'о':['o'],
			'п':['p'],
			'р':['r'],
			'с':['s'],
			'т':['t'],
			'у':['u'],
			'ф':['ph','f'],
			'х':['kh','h'],
			'ц':['c','ts'],
			'ч':['ch'],
			'ш':['sch','sh'],
			'щ':['shch','sch','shh'],
			'ъ':['"'],
			'ы':['i','y'],
			'ь':["'"],
			'э':['eh'],
			'ю':['ju','yu'],
			'я':['ja','ya','y'],

			'a':['а'],
			'b':['б'],
			'c':['к'],
			'd':['д'],
			'e':['е', 'ё'],
			'f':['ф'],
			'g':['г','й'],
			'h':['х'],
			'i':['и','й','ы'],
			'j':['й'],
			'k':['к'],
			'l':['л'],
			'm':['м'],
			'n':['н'],
			'o':['о'],
			'p':['п'],
			'q':['я'],
			'r':['р'],
			's':['з','с'],
			't':['т'],
			'u':['у'],
			'v':['в'],
			'w':['щ'],
			'x':['кс'],
			'y':['ий','й','ы','я'],
			'z':['з']
		},

		"2": {
			'йе':['ye'],
			'йо':['yo'],
			'йу':['yu'],
			'йя':['ya'],
			'кс':['x'],

			'ch':['ч'],
			'ja':['йя','я'],
			'je':['е'],
			'jo':['ё'],
			'ju':['ю'],
			'sh':['ш'],
			'ts':['ц'],
			'ya':['йя','я'],
			'ye':['е'],
			'yo':['ё'],
			'yu':['ю']
		},

		"3": {
			'sch':['ш','щ'],
			'shh':['щ']
		},

		"4": {
			'shch':['щ']
		}
	};

	var _index = {};

	// init index
	data.forEach(function(str, id) {
		if(str.length) {
			put(_index, str, 0, id);
		}
	});


	function _addLetters(symbols, letters, width) {
		if(letters == undefined) {
			return;
		}

		if(typeof letters == 'string') {
			letters = [letters];
		}

		width = width || 1;

		letters.forEach(function(letter) {
			symbols.push({
				letter: letter,
				width: width
			});
		})
	}

	function symbolsAtPos(str, pos) {
		var symbols = [];
		var letter = str.charAt(pos);

		// оригинальная буква
		_addLetters(symbols, letter);

		// punto
		_addLetters(symbols, _punto[letter]);

		// транслит
		// пробегаемся по вариантам транслита разной длины
		for(var width=1, l=Object.keys(_translit).length; width <= l; width++) {
			// смотрим что не выходим за границу слова
			if(pos + width <= str.length) {
				var key = (width == 1 ? letter : str.substr(pos, width));

				_addLetters(symbols, _translit[width][key], width);
			}
		}

		return symbols;
	}

	function put(cache, str, pos, id) {
		symbolsAtPos(str, pos).forEach(function(symbol) {
			var letter = symbol.letter;

			if(cache[letter] === undefined) {
				cache[letter] = {
					ids: [],
					cache: {}
				};
			}

			cache[letter].ids.push(id);

			if(pos + symbol.width < str.length) {
				put(cache[letter].cache, str, pos + symbol.width, id);
			}
		})
	}

	function find(cache, str, pos) {
		var results = [];

		symbolsAtPos(str, pos).forEach(function(symbol) {
			var letter = symbol.letter;

			if(cache[letter] !== undefined) {
				var res;

				if(pos + symbol.width  == str.length) {
					res = cache[letter].ids;
				} else {
					res = find(cache[letter].cache, str, pos + symbol.width);
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
		},

		cache: function() {
			return _index;
		}
	}
}

if(module && module.exports) {
	module.exports = SearchIndex;
}