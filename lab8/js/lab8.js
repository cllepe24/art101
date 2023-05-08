//
//Author: Corissa Lepe <cllepe@ucsc.edu>
//Created: 8 May
//

function thisThing(x){
    var results = (x * 5 == 45);
    return results
}

// test function 
console.log("Is 5 even? ", isEven(5));
console.log("Is 9 even? ", isEven(9));

array = [50, 42, 6, 25, 17]
console.log("My array", array);

var result = array.map(isEven);
console.log("Test of evenness pf array:", result);

var result = array.map(function(x){
    return x ** 2;
})

