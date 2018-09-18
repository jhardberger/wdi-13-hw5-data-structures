

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

// console.log(rainbow[4]);

const john = {
	fullName: 'John Reeves Hardberger',
	favoriteFoods: ['movie theater popcorn', 'peaches', 'pastrami'],
	hobby: 'rock climbing',
	location: 'Chicago',
	favDataType: 'arrays I guess'
}

// console.log(john.favDataType);
// console.log(john.favoriteFoods[2]);

// console.log(john.hobby);


//3. 

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
};

// console.log(crazyObject.taco[1].salsa[5]);

// console.log(crazyObject.larry.quotes[0]);

// console.log(crazyObject.larry.characters[2].favourtieHobby);

// console.log(crazyObject.larry.nicknames[1]);

// console.log(crazyObject.larry.characters[1]);


//4. 

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;


//5. 


