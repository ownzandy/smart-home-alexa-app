module.change_code = 1;
'use strict';

var req = require('request');
var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-skill' );


app.launch( function( request, response ) {
	response.say( 'Welcome to your test skill' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('sayNumber',
  {
    "slots":{"number":"NUMBER"}
	,"utterances":[ 
		"say the number {1-100|number}",
		"give me the number {!-100|number}",
		"tell me the number {!-100|number}",
		"I want to hear you say the number {!-100|number}"]
  },
  function(request,response) {
	req('https://elhdfccpfk.localtunnel.me/vol_up', function (error, response, body) {
		if (!error && response.statusCode == 200) {
		    console.log(body) // Print the google web page.
		 }
	})
    var number = request.slot('number');
    response.say("You asked for the number "+number);
  }
);

module.exports = app;