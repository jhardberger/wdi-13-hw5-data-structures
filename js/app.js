

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

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

const bondFilmTitles = [];

for (i = 0; i < bondFilms.length; i++) {
	bondFilmTitles.push(bondFilms[i].title)
};

console.log(bondFilmTitles);




