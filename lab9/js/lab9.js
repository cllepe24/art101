//
//Author: Corissa Lepe <cllepe@ucsc.edu>
//Created: 10 May
//

window.onload = function (){
    //step one
    var outputEl = document.getElementById("output");
    console.log("output: ", outputEl);

    //step two
    var newEl = document.createElement("p");

    new1El.innerHTML = "Something new.";
    new1El.id = "new-one";

    var new2El = document.createElement("p");
    new1El.id = "new-two";

    new2El.innerHTML = "Something else.";

    //step three
    outputEl.appendChild(new1El);
    outputEl.appendChild(new2El);

    //change some of the css
    //new1El.style.color = "green";
    //outputEl.style.border = "dashed 3px purple"
    outputEl.className = "changed";

}
