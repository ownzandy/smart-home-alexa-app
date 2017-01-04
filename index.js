'use strict';
var AlexaAppServer = require('alexa-app-server');
require('dotenv').config();

var server = new AlexaAppServer({
	httpsEnabled: true,
	port: 3001,
	httpsPort: 3000,
	privateKey: 'server.key',
    certificate: 'server.crt'
});

server.start()
