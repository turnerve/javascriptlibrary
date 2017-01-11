var firstName = 'Turner'

var message = firstName + ": " + 55

console.log(typeof message)
// typeof displays what type of code message variable thing it is

//quotes

var lastName = 'Van Erman'

console.log(typeof lastName)

//use \ so that it doesn't confuse the type of any 's or " after it

var messageTurner = 'Turner says "How\'s your day going?"'

console.log(messageTurner)
var age = 18
//string methods
console.log(messageTurner.length)

console.log(messageTurner.toUpperCase())

console.log(messageTurner.split(" "))

console.log(messageTurner.slice(1,26))


//challenge 1
var graduationYear = 2016
var highschool = 'homeschooled'
var fullName = firstName + " " + lastName
console.log(fullName)
var infoTurnerSchool = fullName + ' was ' + highschool + ' and graduated in ' + graduationYear
console.log(infoTurnerSchool)

var carYear = 2004
var carModel = 'GrandPrixGT'
var carManufacturer = 'Pontiac'

var silverCarChallenge = 'I drive a ' + carYear + " " + carManufacturer + " " + carModel
console.log(silverCarChallenge)

if 
	(age >= 18){
	console.log("You are an adult!")
}
else {
	(age < 18)
	console.log("You are a minor!")
}