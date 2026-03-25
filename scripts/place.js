const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;

/* Static values */

const temperature = 8;

const windSpeed = 10;

/* Wind chill formula */

function calculateWindChill(temp,speed){

return (13.12 + 0.6215 * temp
- 11.37 * speed ** .16
+ 0.3965 * temp * speed ** .16).toFixed(1);

}

/* Conditions */

if(temperature <=10 && windSpeed >4.8){

document.getElementById("windchill").textContent =
calculateWindChill(temperature,windSpeed)+" °C";

}
else{

document.getElementById("windchill").textContent="N/A";

}