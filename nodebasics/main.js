var player = require('./player.js');


var monster = require('./monster.js');
var meany = monster();
meany.name = "Meany";

var meanyTwo = monster();
meanyTwo.name = "Meany Two";


var turner = player();

turner.challenge();

var walker = player();

var gavin = player();

turner.challenge();

turner.roar();

