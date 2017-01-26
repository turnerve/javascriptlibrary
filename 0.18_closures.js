// A closure give you acces to the variables set in a function
//after the function has completed and returned.

//helps keep variables from getting pushed into global scope
//degree of protection. Variables can't be overwritten.

var friend = {};

var setAge =function(myAge) {


	var birthday = "8/3/1998";
		return {
			getAge : function() {
				return myAge;
			},

			getBirthday : function() {
				return this.birthday;
			

			},

			setBirthday : function(birthday) {
				this.birthday = birthday;
			}

		}


}

friend.age = setAge(36);
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.age.birthday);
console.log(friend.age.getBirthday());