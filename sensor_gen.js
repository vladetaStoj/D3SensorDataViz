/////////////////////////////////////////////////////////////////////
// Sensor data analytics example.
// Written by Vladeta Stojanovic (vladeta_stojanovic@yahoo.co.uk)
// Version: 091120_01
// License: MIT
/////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Description: This script generates synthetic sensor data readings.
// Essentially, in generates a random number within a given range, every second, 
// for a specific sensor data input (e.g., blood pressure, hear rate, blood oxygen level, etc).
// This data is then sent via the Express server to the client where it is visualized. 
/////////////////////////////////////////////////////////////////////////////////////////////////////

//Sensor data - measured as whole integers
var blood_sys; //systolic blood pressure
var blood_dias; //diastolic blood pressure
var bmp; //heart rate
var oxy_saturation;  //blood oxygen saturation

//Sensor data packet
function DataPacket(var_0, var_1, var_2, var_3) 
{
    this.blood_sys = var_0;
    this.blood_dias = var_1;
    this.bmp = var_2;
	this.oxy_saturation = var_3;
}

var sensor_reading = new DataPacket(blood_sys, blood_dias, bmp, oxy_saturation);

function RanRange(min, max) 
{  
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function GenerateRanges()
{
	blood_sys = RanRange(100, 130);
	blood_dias = RanRange(80, 90);
	bmp = RanRange(65, 75);
	oxy_saturation = RanRange(95, 100);
	
	//Update the data packet
	sensor_reading.blood_sys = blood_sys;
	sensor_reading.blood_dias = blood_dias;
	sensor_reading.bmp = bmp;
	sensor_reading.oxy_saturation = oxy_saturation;
	
	//Debug
	//console.log(sensor_reading);
}


function UpdateReadings()
{
	//Update to new reading every second
	setInterval(GenerateRanges, 1000);
	
}

//UpdateReadings();

module.exports =
{
    UpdateReadings, sensor_reading
}