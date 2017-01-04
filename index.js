'use strict';
var AlexaAppServer = require('alexa-app-server');
require('dotenv').config();

var server = new AlexaAppServer({
	httpsEnabled: false,
	port: process.env.PORT || 8000
});

server.start();