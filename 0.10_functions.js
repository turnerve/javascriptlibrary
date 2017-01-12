function setLine(){
	console.log("--------------------")
}

function hello(){
 console.log("Hello World")
}
setLine()
hello();

// functions are different from variables in that they have () after them to declare that they're functions.

function greeting(name){
	return "sup fam " + name
}
setLine()
greeting("Walker");

var addGreeting = greeting ("Paul") + " how are you doing today";

console.log(addGreeting)

function sumNum(num1, num2){
	var num1 = 4;
	var num2 = 6;
	console.log(num1 / num2)
}
setLine()
sumNum(4,998);
// --------------------------------------

function sumNum2(num4, num3){
	return num4 % num3;
}
setLine()
console.log(sumNum2(4, 400))
// --------------------------------------

function calcuatePriceIndiana(quantity, price){
	var tax = 0.07;
	var totaltax = quantity * price * tax;
	var totalPrice = totaltax + quantity * price

	return totalPrice
}
setLine()
console.log(calcuatePriceIndiana(17, 5))

// if a variable is in a function, even if you use the same variable in a different function, it will still work because the variable is not defined outside of the function
// things inside of a function's parenthases are called paramaters
// paramaters hold the value when you first create a function
// arguments are paramaters after the function has been called

var today = Date();
console.log(today.toDateString)

function checkOdd(num){
	if (num % 2 === 0){
		return "yo dawg, this is even"
	}else{
		return "naw dawg it's odd"
	}
}
setLine()
console.log(checkOdd(12))

function db3(num){
if (num % 3 === 0){
	return "Yeah dude for sure, " + num + " is divisible by 3"
}else{
	return "naw dawg you can't divide " + num + "by 3"
	}
}
setLine()
console.log(db3(21))

function greeting(name){
	if(name == "Turner"){
		return "Sup bruh, how's OKC doing?"

	}else if (name == "Jaeger"){
		console.log("Oh hey dude")
		}
}
var addGreeting = greeting("Turner")



//--------------------------------------------------------------
//--------------------------------------------------------------
// -------------- Challenge: Functions  ------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
/*
Write a function with two strings as parameters.
		The function should concatenate the string.

Write a function that will help me easily calculate monthly bills.

Write a function that takes quantity, price, tax and an item
The function should take the quantity, price, tax and the item name and return
a response similar to this.
--150 hotdogs will cost you $145 (your math may not be perfect and may
 potentially return 145.457.  If that is the case, don’t sweat it. */


// Bronze challenge

function gameOnTonight(team1, team2){
	if (team1 == "Cavaliers"){
		return "I can't wait to watch LeBron play against the " + team2
	if (team1 == "Celtics"){
		return "Isaiah Thomas has been doing pretty well lately! That'll be a good game."

	}
	}else if (team1){
		console.log("Oh sick! That'll be a good game!")
	}
}
setLine()
console.log(gameOnTonight("Celtics", "Thunder"))
setLine()
function twoStrings(logic, theRapper){
	return "Bobby " + "Tarantino"
}
console.log(twoStrings("logic", "theRapper"))
/* function calcuatePriceIndiana(quantity, price){                              
	var tax = 0.07;
	var totaltax = quantity * price * tax;
	var totalPrice = totaltax + quantity * price

	return totalPrice
}

console.log(calcuatePriceIndiana(17, 5)) */


/*function greeting(name){
	if(name == "Turner"){
		return "Sup bruh, how's OKC doing?"

	}else if (name == "Jaeger"){
		console.log("Oh hey dude")
		}
}
var addGreeting = greeting("Turner")
*/
// Silver challenge
function rentYear(rentMonthly){
	return rentMonthly * 12
}
setLine()
console.log(rentYear(1100))

function calcuatePriceFood(quantity, price){
	var tax = 0.07;
	var totaltax = quantity * price * tax;
	var totalPrice = totaltax + quantity * price

	return quantity + " hotdogs will cost you " + totalPrice + " dollars."
}
setLine()
console.log(calcuatePriceFood(17, 10))



/*Write a function that takes quantity, price, tax and an item
The function should take the quantity, price, tax and the item name and return
a response similar to this.
--150 hotdogs will cost you $145 (your math may not be perfect and may
 potentially return 145.457.  If that is the case, don’t sweat it. */

