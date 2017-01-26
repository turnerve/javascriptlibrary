// Immediately Invoked Functional Expression
//this is called a functional expression

var greeting = function(name) {
	console.log("Hello " + name);

}("Turner");



(function( value ){
	console.log(value)
})(15)

var myIIFE = (function(){
	var privateVar = "secrets";
		return {
			reveal : functon () {
				console.log( privateVar);
			}console.log(myIIFE.pprivateVar)
		}
})();
