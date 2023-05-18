//
//Author: Corissa Lepe <cllepe@ucsc.edu>
//Created: 17 May, 2023
//

//adding buttons to each section
$("#challenge").append("<button id='a-button'>Button</button>");
$("#problems").append("<button id='b-button'>Button</button>");
$("#reflection").append("<button id='c-button'>Button</button>");
$("#results").append("<button id='d-button'>Button</button>");

//

$("#a-button").click(function(){
    $(this).parent().toggleClass("special");
})

//

$("#b-button").click(function(){
    $(this).parent().toggleClass("special");
})

//

$("#c-button").click(function(){
    $(this).parent().toggleClass("special");
})

//

$("#d-button").click(function(){
    $(this).parent().toggleClass("special");
})