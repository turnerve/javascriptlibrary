//empty object
var emptyObject = {};
//object with properties
var facebookFriend = {
	name	: "",
	age		: 0,
	vocation: "",
	isDating: true,
	isEngaged: true,
	birthday: ""
};
facebookFriend.name = "Kenn"
console.log(facebookFriend.name);

facebookFriend.age = 40;
console.log(facebookFriend.age);
var today = new Date();
console.log(today.toDateString());
if (today > facebookFriend.birthday){
	console.log("Just turned " + facebookFriend.age)
}
facebookFriend.isDating =true
facebookFriend.isEngaged = true
if(facebookFriend.isDating && facebookFriend.isEngaged){
	console.log(facebookFriend.name + " is in a relationship." && console.log(facebookFriend.name + " is engaged."))

}

//TODO FIX THE UNDEFINED