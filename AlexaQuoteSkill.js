"use strict";

var quotes = [
        {quote: "Know what you know. And know what you don't know."},
        {quote: 'You have to know why things work the way they do, not just how they work.'},
        {quote: 'Now is the perfect time to panic!'},
        {quote: 'Needless consistency is the hobgoblin of small minds.'},
        {quote: 'I will give you a mile, but you are not going to take an inch.'}
    ];



// Include the Alexa SDK
var Alexa = require("alexa-sdk");

// The handlers object tells Alexa how to handle various actions
var handlers = {
  "MyQuoteIntent": function () {
      
      
      //Generate random number and multiply by the number of objects in the quotes array
      var random = function() {
          var number = Math.random();
          var x = Math.round(number * 5);
          return x;
          };

      
      //Assign variable for random index value to quotes array
      var randomQuote = quotes[random].quote;

      
		//Create speech output. This is what Alexa will speak back when the user says "Ask code academy to say hello"
      this.response.speak(randomQuote);
      this.emit(":responseReady");
   },

};


// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {

  // Set up the Alexa object
var alexa = Alexa.handler(event, context);
  
  // Register Handlers
  alexa.registerHandlers(handlers);

  // Start our Alexa code
 alexa.execute();  
};