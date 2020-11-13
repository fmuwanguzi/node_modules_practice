const { foods } = require('./myModule')

//Array of foods from myModule
foods.forEach(fav => console.log(fav));

//       WEATHER NPM 
//weather npm https://www.npmjs.com/package/weather
const Weather = require('weather');


//got an appID using https://developer.here.com/projects/PROD-3ef6f9dd-1456-4713-9109-4750fefd37f0
const appID = 'W5yFJZ4yJG94Z4V2wRIV';
const appCode = 'PiUk1t1TckSwxsiq23B6IQ';


const weather = new Weather({
    appID,
    appCode
});

//tells you the weather anywhere just change the location 
weather.now('Boston, United States').then((results) => {
    console.log(results);
});

weather.now('Kampala, Uganda').then((results) => {
    console.log(results);
});

// FOUND AN NBA STAT API

const NBA = require("nba");

const curry = NBA.findPlayer('Stephen Curry');

//this gives a playeriD to look up more info on the player
console.log(curry);

//showed seasons and averages including total allstar appearences
NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(console.log);

//second attempt different player
const tatum = NBA.findPlayer('Jayson Tatum');

console.log(tatum);

NBA.stats.playerInfo({ PlayerID: tatum.playerId }).then(console.log);


//this npm allows you to add different colors at different places within your string

const colors = require('colors');

console.log('Felix Muwanguzi'.rainbow); // spelled each letter in different colors

console.log('It will underline and print in black and give a white background'.underline.inverse)

