/////////////////////////////////////////////////////////////////////
// Sensor data analytics example.
// Written by Vladeta Stojanovic (vladeta_stojanovic@yahoo.co.uk)
// Version: 091120_01
// License: MIT
/////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Description: This script implements the Express server that sends sensor data updates to the client for visualization.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

//Sensor data generator
const sensor = require("./sensor_gen.js")

app.get('/', function(req, res)
{
	res.sendFile(__dirname + '/client.html');
});

io.on('connection', function(socket)
{	
	socket.on('get_readings', function(data)
	{
		console.log("Sending requested reading...");
		console.log(sensor.sensor_reading);
		socket.emit ('send_sensor_data', sensor.sensor_reading);
	});
});


http.listen(port, function()
{
	console.log('listening on *:' + port);
	sensor.UpdateReadings();
});
