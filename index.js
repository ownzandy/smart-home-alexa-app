'use strict';
var AlexaAppServer = require('alexa-app-server');

var server = new AlexaAppServer({
	httpsEnabled: true,
        debug: false,
	port: 3001,
	httpsPort: 3000,
        app_dir: '/home/pi/Development/smart-home-alexa-app/apps',
	privateKey: '/home/pi/Development/smart-home-alexa-app/sslcert/server.key',
        certificate: '/home/pi/Development/smart-home-alexa-app/sslcert/server.crt',
        chain: '/home/pi/Development/smart-home-alexa-app/sslcert/server.ca-bundle'
});

server.start()


