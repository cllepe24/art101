/**
 * Author: Corissa Lepe
 * Created: 05.03.2023
 * 
 */

function sortUserName() {
    var userName = window.propmpt("Hi. Please tell me your name so I can fix it.");
    console.log("underName =", userName);
    //split string using array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    //could have done a whole line but didn't
    return nameSorted;
}

function main() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
    document.writeln("Here's your sorted name: " + sortedName + "</br></br>");
    var randomName = randomizeName(userName);
    document.writeln("And oh hey, I fixed your name.<br>Your new one is above.");
    document.writeln("<div class='name'>" + randomName + "</div>")
}

//output
document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");
