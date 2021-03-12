
let colorNum = 16;
let colorArray = [];

const containerDiv = document.querySelector(".container");

  //need to loop the function X number of times to get enough for a grid
function displayColors() {
    for(let i = 0; i < colorNum; i++) {
        let result = randomHex();
        let div = document.createElement("div");
        div.textContent = result;
        div.style.background = result;
        div.classList.add("flex-div");
        containerDiv.appendChild(div);
    }
}

//to-do:
    //determine if a light or dark hex color and change the text color based on it

function determineColor() {
    let example = randomHex();

    //00 - 0 (more color - closer to black)
    //FF - 255 (less color - closer to white)

    //convert back into a hexidecimal number? 
    //then can check it's range and determine if it's on the lighter end or not
    //pick a spot somewhere in the middle - 127.5 
    //if number is > 127.5, make it 'dark, less than 127.5 it is a 'light' color

    let red = example.slice(1,3), 
    green = example.slice(3,5), 
    blue = example.slice(5,8);

    //colorArray.push(example.slice(1,2), example.slice(2,3), example.slice(3,4), example.slice(4,5), example.slice(5,6), example.slice(6,7));
    
    for (let index = 0; index < example.length; index++) {if(index !== 0){colorArray.push(example.slice(index, index+1));}}

    console.log(colorArray)
    //string length of 7
    // NEVER need the character at position 0
    //want to push each other character individually to the array
    console.log(red + " " + green + " " + blue);
}

displayColors();
determineColor();

//randomHex courtesy of : https://github.com/noops-challenge/hexbot#note-to-developers
function randomHex() {
    const hexMax = 256 * 256 * 256; //number of possibilities -  R G B?
    return '#' + Math.floor(Math.random() * hexMax).toString(16).toUpperCase().padStart(6, '0');
    //toString(16) returns a hexidecimal number
    //padStart() 'pads' the number with 0s if it isn't 6 digits long
  }