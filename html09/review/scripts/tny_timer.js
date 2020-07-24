"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Kenji Hirai
   Date: 11/01/2018  

*/

showClock();
setInterval("showClock()", 1000);

function showClock()
{ 
 	var thisDay = new Date("May 19, 2018 09:31:27"); 
 	var localDate = thisDay.toLocaleDateString(); 
 	var localTime = thisDay.toLocaleTimeString();
	document.getElementById("currentTime").innerHTML = localDate + "<br />" + localTime;
}

function nextJuly4(thisDay) 
{ 
	var j4Date = new Date("July 4, 2018 21:00"); 
	var days = (j4Date - thisDay) / (1000*60*60*24);
	var hrs = (days - Math.floor(days))*24;
	var mins = (hrs - Math.floor(hrs))*60;
	var secs = (mins - Math.floor(mins))*60;
	document.getElementById("dLeft").textContent = Math.floor(days);
	document.getElementById("hLeft").textContent = Math.floor(hrs);
	document.getElementById("mLeft").textContent = Math.floor(mins);
	document.getElementById("sLeft").textContent = Math.floor(secs);
}
