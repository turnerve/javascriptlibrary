// indexing starts at 0

//---------0123456789123456
//---------vvvvvvvvvvvvvvvv


function setLine(){
	console.log("--------------------")
}




setLine()
var name ="he comin in through your windows, he's snatching your people up, hide your kids hide your wife";
console.log(name.length);
console.log(name[0] + name[1] + name [2] + name[3]);
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])
console.log(name[6])
console.log(name[7])
console.log(name[8])
console.log(name[9])
console.log(name[10])
console.log(name[11])
console.log(name[12])
console.log(name[13])
console.log(name[14])
console.log(name[15])
console.log(name[16])


var lcv = 0;
while(lcv < 15){
	console.log(name.toUpperCase());
	lcv += 1; // THIS IS CRITICAL!! NO VAR LEADS TO INFINITY
}
setLine()
var count = 0;
while(count < 11){
	console.log(count)
	count ++; // ++ IS EQUAL TO += 1
}
setLine()
var num = 10; //lcv but we named it num
while(num > 0){
	console.log(num)
	num--; // num-- is the same as num -= 1
}
