var favShow = "Seinfeld";
// for (i = 0; i < favShow.length; i++)
for (var letter in favShow) {
	console.log(favShow[letter])
}
var vowelCount = 0;
var favFood = "Macaroni and Cheese";
for (letter in favFood) {
	console.log(favFood[letter])
		if(favFood[letter].toLowerCase() === "a" || favFood[letter].toLowerCase() === "e" || favFood[letter].toLowerCase() === "i" || favFood[letter].toLowerCase() === "o" || favFood[letter].toLowerCase() === "u"){
			vowelCount++
		
	}
}
console.log("There are " + vowelCount + " vowels in " + favFood);