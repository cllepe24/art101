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

//output
document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");
