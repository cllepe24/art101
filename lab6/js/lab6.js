// index.js - purpose and description here
// Author: Corissa Lepe <cllepe@ucsc.edu>
// Date: May 1, 2023

// Define Variables
myTransport = ["Bus", "walking"];

// create an object for my main ride
myMainRide = {
  make: "City Metro",
  model: "Bus",
  color: "mixed",
  year: 2021,
  age: function() {
    return 2023 - this.year;

  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");



// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
