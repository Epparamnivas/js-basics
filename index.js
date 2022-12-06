//npn init
//npm i cowsay



const Quote = require('inspirational-quotes');

const sayIt = Quote.getRandomQuote();


var cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: sayIt,
    e: "oO",
    T: "U ",
  })
);

