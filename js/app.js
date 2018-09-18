

//1.

// light switch --> an object containing a boolean

const lightSwitch = {
	lightOn: true
	//you could also build a function to turn the light on and off
};

// email address --> string

const myEmail = "john.hardberge@gmail.com";

//spaceship --> an object with a variety of properties

const deathStar = {
	exterior: 'hull',
	weapons: ['laser blasters', 'tractor beam'],
	drive: 'warp'
};

//list of student names --> an array

const saltySardinesChicago = ['john', 'ashley', 'greg', 'fil', 'josh', 'andy', 'charlotte', 'chrisL', 'chrisR'];

//list of student names with location --> array of objects

const saltySardinesFinder = [
	{
		name: 'john',
		location: 'home'
	},
	{
		name: 'ashley',
		location: 'madison, WI'
	},
	{
		name: 'fil',
		location: 'the burbs'
	}
];

//list of student names + location + tv --> array of objects again, with one property of the object being an array

const saltySardinesTVFinder = [
	{
		name: 'john',
		location: 'home',
		favoriteShows: ['Joe Pera Talks to You', 'The Good Place', 'Jane the Virgin', 'Mad Men']
	},
	{
		name: 'fil',
		location: 'the burbs',
		favoriteShows: ['Mythbusters']
	}
];


//2. 

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(rainbow[4]);

const john = {
	fullName: 'John Reeves Hardberger',
	favoriteFoods: ['movie theater popcorn', 'peaches', 'pastrami'],
	hobby: 'rock climbing',
	location: 'Chicago',
	favDataType: 'arrays I guess'
}

console.log(john.favDataType);
console.log(john.favoriteFoods[2]);

console.log(john.hobby);