//this variable is a string type
var firstname = "Turner"
var lastname ="Van Erman"
var fullname = firstname + (" ") + lastname

//you can combine variables into one variable

//concatenation (this is where you can build or combine strings)
console.log(firstname + " " + lastname)
console.log(fullname)
//empty variables
var num

console.log(num)

num = 100
//empty variables can be defined later on

//empty strings
var petsName = ""

petsName = "Air"

//empty strings can be defined later
//camel case is when the first word is lower case and the second word is capitalized
//snake case is when you use _ underscores to space out each word

// short hand operators
var age = 18
console.log(age += 1) // age = age + 1
console.log(age) //now age is 19

var rw_tripledoubles_this_season = console.log("Russell Westbrook triple doubles so far this season = 17");
var temperature = 53
console.log(temperature)
var carYear = 2004
console.log(carYear)
var girlfriendName = "Elizabeth"
console.log(girlfriendName)
// when making variables, avoid these words - Abstract else instanceof class float null const for package continue function private debugger goto protected

var myNumber = 0
myNumber = (myNumber += 10)
console.log(myNumber)
myNumber = (myNumber *= 9)
console.log(myNumber)
myNumber = (myNumber /= 7)
console.log(myNumber)

age = (age -= 1)
console.log(age)

var maxAge = 80
var waterPerDay = 6
var yearsLeft = maxAge - age
var waterLeft = yearsLeft *= waterPerDay * 365
console.log(yearsLeft *= waterPerDay * 365)
var message ='You will need ' + -waterLeft + ' glasses of water before you kick the bucket.'
console.log(message)