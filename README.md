search-index
============

запуск в консоли

    create index: 286ms
    0 'a'
    1 'ab'
    2 'abc'
    3 'abcd'
    4 'ф'
    5 'фи'
    6 'фис'
    7 'фисв'
    8 'а'
    9 'аб'
    10 'абв'
    11 'абвг'
    12 'xthysq'
    13 'черный'
    14 'чёрный'
    15 'ifgjdfk'
    16 'shapoval'
    17 'shapoval'
    18 'shkinev'
    19 'шаповал'
    20 'shkinev'

    [ 'abc', 'abcd', 'фис', 'фисв' ]
    [ 'xthysq', 'черный', 'чёрный' ]
    [ 'ifgjdfk',
      'shapoval',
      'shapoval',
      'shkinev',
      'шаповал',
      'shkinev' ]
    [ 'shapoval', 'shapoval', 'шаповал', 'ifgjdfk' ]

    find: 13ms
    {
      letters: 46 811,
          ids: 76 491,
          put: 22 814,
         find:  1 100
    }


запуск в браузере
	    create search index a: 0ms
    find	0
    ids		3
    letters	3
    put		1
    
    create search index an: 0ms
    find	 0
    ids		12
    letters	12
    put		 4
    
    create search index ant: 1ms
    find	 0
    ids		39
    letters	39
    put		13
    
    create search index anti: 1ms
    find	  0
    ids		174
    letters	174
    put		 40
    
    create search index antip: 3ms
    find	  0
    ids		579
    letters	579
    put		175
    
    create search index antipo: 8ms
    find	    0
    ids		1 794
    letters	1 794
    put		  580
    
    create search index antipov: 24ms
    find	    0
    ids		5 439
    letters	5 439
    put		1 795
    
    create search index antipov@: 63ms
    find	    0
    ids		9 084
    letters	9 084
    put		5 440
    
    create search index antipov@c: 109ms
    find 	     0
    ids		20 019
    letters	20 019
    put		 9 085
    
    create search index antipov@co: 283ms
    find	     0
    ids		52 824
    letters	52 824
    put		20 020
    
    create search index antipov@cor: 701ms
    find	      0
    ids		151 239
    letters	151 239
    put		 52 825
    
    create search index antipov@corp: 1880ms
    find	      0
    ids		446 484
    letters	446 484
    put		151 240
    
    create search index antipov@corp.: 5361ms
    find	        0
    ids		1 036 974
    letters	1 036 974
    put		  446 485
    
    create search index antipov@corp.m: 14013ms
    find	        0
    ids		2 808 444
    letters	2 808 444
    put		1 036 975
