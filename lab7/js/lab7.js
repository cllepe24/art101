// index.js - Lab 7: Functions
//Author: Corissa Lepe
//Created: 05.03.2023
 
//Constants

// Functions
function sortUserName() {
  var userName = window.prompt("Hi! Please tell me your name so I can fix it.")
  console.log("userName =", userName);
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log ("nameSorted =", nameSorted);
  return nameSorted;
}
//Output
document.writeln("Here is your sorted name: ",
  sortUserName(), "</br>");
document.writeln("And oh hey, I fixed your name. <br> Your new one is above.")

function main () {
    console.log("Main Function started.");
}

main();