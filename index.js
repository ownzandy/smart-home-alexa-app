'use strict';
var AlexaAppServer = require('alexa-app-server');
require('dotenv').config();

var server = new AlexaAppServer({
	httpsEnabled: true,
        debug: false,
	port: 3001,
	httpsPort: 3000,
	privateKey: '/home/pi/Development/smart-home-alexa-app/sslcert/server.key',
        certificate: '/home/pi/Development/smart-home-alexa-app/sslcert/server.crt',
        chain: '/home/pi/Development/smart-home-alexa-app/sslcert/server.ca-bundle'
});

server.start()


