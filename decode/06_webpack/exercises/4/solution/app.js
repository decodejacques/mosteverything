let oneLinerJoke = require('one-liner-joke');
let joke = oneLinerJoke.getRandomJokeWithTag('animal').body;
let t = document.createTextNode(joke);
document.getElementById("root").appendChild(t);