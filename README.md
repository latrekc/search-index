search-index
============


tugovikov-new@tugovikov-mail:~/Code/latrekc/search-index (master *)$ node test.js
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
{ letters: 46811, ids: 76491, put: 22814, find: 1100 }
tugovikov-new@tugovikov-mail:~/Code/latrekc/search-index (master *)$ 
