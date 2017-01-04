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

var basicAuth = require('basic-auth-connect')
server.express.use(basicAuth(process.env.USER, process.env.PASSWORD))
