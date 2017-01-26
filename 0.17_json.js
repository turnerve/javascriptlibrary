//JSON is an acronym for JavaScript Object Notation
//Nested arrays
var names = [["Morgan", "Julie", "Abbey", "Brie"], ["James", "Paul", "Cameron", "Chris"]]
//console.log(names[0][5])
var items = [
	{
		"id": 1,
		"name": "Red Door",
		"price": 120.50,
		"tags": ["home", "green", "vinyl"]
	},

	{
		"id": 2,
		"name": "Yellow Door",
		"price": 120.50,
		"tags": ["home", "green", "wood"]
	},

		{
		"id": 3,
		"name": "Brown Door",
		"price": 120.50,
		"tags": ["home", "brown", "wood"]
	},
];

console.log(items[0].tags[1]);

var listName ="";
for (var i = 0; i<items.length; i++){
	console.log(items[i].name);
}

