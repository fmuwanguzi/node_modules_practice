const { foods } = require('./myModule')

//Array of foods from myModule
foods.forEach(fav => console.log(fav));

//weather npm https://www.npmjs.com/package/weather
const Weather = require('weather');

const appID = 'W5yFJZ4yJG94Z4V2wRIV';
const appCode = 'PiUk1t1TckSwxsiq23B6IQ';

const weather = new Weather({
    appID,
    appCode
});

//tells you the weather anywhere just change the location 
weather.now('Kampala, Uganda').then((results) => {
    console.log(results);
});

weather.now('Kampala, Uganda').then((results) => {
    console.log(results);
});