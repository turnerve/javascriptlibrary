// Object literals with methods
// Functions inside of an object.

var player = {
// Properties
	name	: "",
	life 	: 0,
	damage  : 1.5,


	// Methods
	challenge	: function(){
		console.log(this.name + ": " + " Does anyone accept my challenge? ");
	},

	response	: function(){
		console.log(this.name + ": " +" I accept your challenge! Let's fight!")
	},

	eatFood		: function(){
		console.log(this.name + ": " + "MMM, tasty!")
		this.life += 25
	},

	takeHit		: function(){
		console.log(this.name + ": " + "Ouch!")
		this.life -= 30

		if (this.life === 0);
		console.log("You have died!")
	},

	pickUpSword		: function(){
		console.log(this.name + ": " + "Oh cool! It looks like I could use this as a decent weapon for fighting.")
		this.damage += 2.5
	},

	attack		: function(target){
		console.log(this.name + " attacks " + target.name + " and does " + this.damage)
	},

	leatherArmor 		: function(){
		this.health += 100
	},


	armor		: function(){
		console.log(this.name + " has picked up the leather armor and gained " + this.life + ".")
	},








}

var donaldGlover = Object.create(player);
donaldGlover.name = "Donald Glover";

var bobbyTarantino = Object.create(player);
bobbyTarantino.name = "Bobby Tarantino";

console.log(bobbyTarantino.name)
console.log(donaldGlover.name)

console.log(donaldGlover.life)

bobbyTarantino.challenge();

bobbyTarantino.eatFood();
console.log(bobbyTarantino.life);

bobbyTarantino.eatFood();
console.log(bobbyTarantino.life);

bobbyTarantino.takeHit();
console.log("Health is now: " +bobbyTarantino.life);

bobbyTarantino.pickUpSword();
console.log("damage is now: " + bobbyTarantino.damage)
bobbyTarantino.challenge();
donaldGlover.response();

donaldGlover.takeHit
console.log(donaldGlover.life)

donaldGlover.takeHit
console.log(donaldGlover.life)

donaldGlover.takeHit
console.log(donaldGlover.life)

donaldGlover.takeHit
console.log(donaldGlover.life)

donaldGlover.leatherArmor
