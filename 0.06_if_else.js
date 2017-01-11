// if/else

var elevatorUp = true
var elevatorDown = true
var elevatorOpen = true
var elevatorBroken = true
var elevatorStuckAndWeAreOnIt = true
var elevatorNumber = 13

if(elevatorUp === true){
	console.log("Going up");
}else {
	console.log("Going down");
}

//one line of code in an if else statement can be made without curly braces


if(elevatorBroken === true){
	console.log("Well shit. Guess I have to walk.");
}
else {
	console.log("Which floor would you like to visit?");
}

if (elevatorStuckAndWeAreOnIt){
	console.log("Damn, I'm going to be late to work if I can't get out of this thing!");
}else{
	console.log("This elevator has nice accoustics.");
}

if (elevatorBroken && elevatorStuckAndWeAreOnIt) {
	console.log("Call the fire department!");
}else{
	console.log("I wonder if penguins have knees.....")
}


//CHALLENGE: Bronze

//WRITE YOUR OWN CONDITIONAL USING BOOLEANS AND LOGICAL OPERATORS.
//Come up with a simple example

//Challenge: Silver
//Create a simple login console message.
// create 2 variables 1 for your users firstName, 2 for the boolean condition
// If login is true then print "You're Logged In!"
//Else if login is false then print "Please Sign In"


//CHALLEGE: Gold
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

//Bronze-----------------------------------------------------------------------------------
var weatherSunny = true
var weatherRainy = false
var weatherCloudy = true

if (weatherSunny && weatherCloudy === true){
	console.log("It's really nice out today! Thankfully it's a little cloudy outside so it's not too hot.");
}else {
	console.log("Man, it really sucks that it's so crappy outside today.")
}
//Silver-----------------------------------------------------------------------------------
var firstName = "Turner"
var password = "password"
var correctLoginMessageOne = "Username accepted."
var correctLoginMessageTwo = "Password accepted. Welcome Turner!"
var invalidLoginMessageOne = "Username invalid."
var invalidLoginMessageTwo = "Password invalid."

if (firstName === "Turner"){
	console.log(correctLoginMessageOne);
}else{
	console.log(invalidLoginMessageOne);
}

if (password === "password"){
	console.log(correctLoginMessageTwo);
}else{
	console.log(invalidLoginMessageTwo);
}
//Gold-----------------------------------------------------------------------------------
var bankAccount = 10000
var debt = 2000
var remainder = bankAccount % debt
if (bankAccount >= debt){
	console.log("Your debt is paid!");
}

