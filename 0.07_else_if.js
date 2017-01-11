


var age = 21
if (age >= 21){
	console.log("You may consume the liquid of the gods.")
}


else if (age >= 25){
	console.log("You can vote")
}

else {
	console.log("You may not consume the liquid of the gods.")
}

//else is just if a statement is false, else IF is is a statement is false, but also needs to be specific. if even ONE statement is not true, else if will still print.

// else if means if the first statement isn't true, then check to see if the second one is and so on and so forth


//CHALLENGE: BRONZE
//expand upon our a simple login.
// create 2 variables 1 for your users username, 2 for the boolean condition then another to check if the user is an admin
// If login is true then print "You're Logged In!"
// If login is true and the user is a admin, print "This is the dashboard for your employee records you have master control"
// If Login is true and the user is a manager, print "This is the dashboard for your employee records, you can only read but not create users"
// If login is true and the user is a employee, print "clock in and clockout please" 
//Else if login is false then print "Please Sign In"


//CHALLENGE: SILVER
/*
Create an if statement that has several conditions.
 Pretend that we will play four total games next year against the patriots.
 Deal with the Patriots record versus our record In other words, if our record was better, 
 talk some smack. If not, you should still talk some smack, but in 
 a different way. If the records were the same, talk some smack. 
 
 */

//CHALLENGE: GOLD

//1. Write a program that prompts your users in the browser to enter a
//number from 1 to 5 about how optimistic they are about the Colts next year.
//2. Have a different response for each number.

/*HINT*
 you have to build this in relp.it 
Research prompt*/
 
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
	

