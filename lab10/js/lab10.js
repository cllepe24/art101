//
//Author: Corissa Lepe <cllepe@ucsc.edu>
//Created: 14 May
//

//functions

function sortUserName(userName) {
    // split the array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    //  userName.toLower().split("").sort().join("")
    return nameSorted;
  }
  
  // add button
  var button = document.getElementById('my-button');
  button.addEventListener('click', function() {
    console.log("Here we are.");
    inputValue = document.getElementById('user-name').value;
    var sortedName = sortUserName(inputValue);
    console.log("Results", sortedName);
    document.getElementById("output").innerHTML = sortedName;
  });