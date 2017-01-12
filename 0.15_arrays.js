var nameOne = "Paul"
var nameTwo = "Kenn"
var nameThree = "James"
var nameFour = "Jenn"
var nameFive = "John"

//this is how to ceate a JS aray

var names =["Paul", "Kenn", "James", "Jenn", "John"];
console.log(names[2]);

/*var weather =[Sunny, Cloudy, Rainy, Snowy];
sunny = console.log("Man it's bright out today!")
console.log(weather[0]); TO DO LATER */

for (name in names) {
	console.log(names[name])
}

var favCandy = ["KitKat", "Butterfinger"]
console.log(favCandy);
console.log(favCandy[1]);
favCandy.push("Peanut Butter Cups");
console.log(favCandy);
favCandy.pop();
console.log(favCandy.slice(0,2))

// how to remove a specific element of an array

console.log(favCandy.indexOf("SPK"));

// .indexOf will return the index of where a value is located in the array
// .splice will allow us to remove the item fOREVERRRRRRRRR