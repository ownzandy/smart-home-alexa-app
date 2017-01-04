'use strict';
var AlexaAppServer = require('alexa-app-server');
require('dotenv').config();

var server = new AlexaAppServer({
	httpsEnabled: true,
        debug: false,
	port: 3001,
	httpsPort: 3000,
	privateKey: 'server.key',
        certificate: 'server.crt',
        chain: 'server.ca-bundle'
});

server.start()


