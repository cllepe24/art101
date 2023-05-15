//
//Author: Corissa Lepe <cllepe@ucsc.edu>
//Created: 14 May
//

//functions

//shuffleArray - take an array and shuffle the contents
function shuffleArray (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    //shuffle elements
    (0 !== currentIndex) {
        //pick remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = 1;
        //swap with current element 
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//sortUserName to take user input and sort the letters of name
function reorderUsername(word) {
    var wordArray = word.toLowercase().split('');
    var newArray = shuffleArray(wordArray);
    return newArray.join('');

}

//return string in title case
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

//find the button element 
buttonEl = document.getElementById("my-button");
console,log("button element:", buttonEl);
//find the form element 
inputEl = document.getElementById("user-name")
console.log("input element:", inputEl);
//find output element
outputEl = document.getElementById("output");
console.log("output element:", outputEl);

//add event listener to button
buttonEl.addEventListener("click", function(){
    //get the value from name element
    var userName = inputEl.value;
    //sort or shuffle value
    var newName = toTitleCase(reorderUserName(userName));
    //put value in output element
    outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});