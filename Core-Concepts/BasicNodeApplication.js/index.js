const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/math');

const app = {};

app.config = {
    timeBetweenQuotes: 1000,
};

app.printAQuote = function printAQuote(){
    const allQuotes = quotesLibrary.allQuotes();
    const numberOfQuotes = allQuotes.length();
    const randomNumber = mathLibrary.getRandomNumber(1,numberOfQuotes);
    const selectedQuote = allQuotes[randomNumber-1]
    console.log(selectedQuote);
}

//function that loops indefinitely calling the prinAQuote function as it goes.
app.indefiniteLoop = function indefiniteLoop(){
    setInterval(app.printAQuote,app.config.timeBetweenQuotes);
};
app.indefiniteLoop();