//
//Author: Corissa Lepe <cllepe@ucsc.edu>
//Created: 10 May
//

window.onload = function () {
    // Step one
    var outputEl = document.getElementById("output");
    console.log("outputEl: ", outputEl);
    
    // Step two
    var new1El = document.createElement("button");

    // Step two
    new1El.innerHTML = "CLICK ME!";
    new1El.id = "new-one";
    new1El.addEventListener("click", msg);

    // Step two
    var new2El = document.createElement("button");
    new1El.id = "new-two";

    // Step two
    new2El.innerHTML = "NO, CLICK ME!";

    // Step three
    outputEl.appendChild(new1El);
    outputEl.appendChild(new2El);

    // Change the css attributes of at least two elements of your page
    // we do some stuff
    // new1El.style.color = "green";
    // outputEl.style.border = "dashed 3px purple";
    // new1El.style.fontSize = "15px"
    // new2El.style.fontSize = "15px"

    outputEl.className = "changed";

}

function msg() {
    alert(":)");
}

function msg2() {
    alert(">:(");
}
