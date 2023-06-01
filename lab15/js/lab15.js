//
//Author: Corissa Lepe <cllepe@ucsc.edu>
//Created: 31 May, 2023
//


function fetchDogImage() {
// Make GET request to Dog API endpoint
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
// Display fetched image on HTML page
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<img src="${data.message}" alt="Random Dog Image">`;
    })
    .catch(error => {
    console.log('Error:', error);
    });
}
    
    const dogButton = document.getElementById('dogButton');