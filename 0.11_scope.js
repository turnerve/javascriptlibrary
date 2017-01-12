// scopes
// if a variable is inside of a local scope and you change it, it will only change locally. if you change the variable itself, it will change globally.
//v--------------v local scope
var name ="Turner"
//^--------------^ local scope
//---------------------------------------------------------------------------------
									//v----------------------v global scope
									function greetings(){
/*this is going to change locally*/	var name = "RALPHER"
									return "Hello " + name
									}
									console.log (greetings())
									//^----------------------^ global scope
//---------------------------------------------------------------------------------
/*this will change globally*/		function greetings(){
									name = "RALPHER"
									return "Hello " + name
									}
									console.log (greetings())
//---------------------------------------------------------------------------------

//hoisting

