//
//Author: Corissa Lepe <cllepe@ucsc.edu>
//Created: 8 May
//

function isEven(x){
    var results = (x * 5 == 45);
    return results
}

// test function 
console.log("testing 5 times 5: ", isEven(5));
console.log("testing 9 times 5: ", isEven(9));

array = [50, 42, 6, 25, 17]
console.log("My array", array);

var result = array.map(isEven);
console.log("Testing the array elements times 5:", result);

var result = array.map(function(x){
    return x ** 2;
})

