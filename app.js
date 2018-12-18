console.log("It's raining today!!!");

//1. Data Types
// A light switch that can be either on or off.
    //Boolean => because true can be used for on and false for off.
// A user's email address.
    //A String => becasue it contain combination of letters and words.
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
    //An object => because well they are objects and we can store their properties.
// A list of student names from our class.
    //An array => because these are without any properties.
// A list of student names from our class, each with a location.
    //object => becasue location can be stored as properties.
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
    //An array with objects nested inside.

//2. Take it easy
 
const rainbowColors = ["red", "Orange", "yellow", "green", "blue", "indigo", "violet"];

console.log(rainbowColors[4]);

const binod = {
    favoriteFood: "pineapple",
    hobby: "soccer",
    city: "Denver",
    favoriteDatatype: "object"
}

console.log(binod.hobby);

//3. crazy Object

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
  }

  console.log(crazyObject.taco[1].salsa[5]);

  console.log(crazyObject.larry.quotes[0]);

  console.log(crazyObject.larry.characters[2].favourtieHobby);

  console.log(crazyObject.larry.nicknames[1]);

  console.log(crazyObject.larry.characters[1])


