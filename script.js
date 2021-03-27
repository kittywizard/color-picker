
let colorNum = 5;
let colorArray = [];
let hexArray = [];
let light = 0,
    dark = 0;


const containerDiv = document.querySelector(".container");

function displayColors() {
    for(let i = 0; i < colorNum; i++) {
     let result = randomHex();
     let div = document.createElement("div");
        div.textContent = result;
        div.style.background = result;
        div.style.color = determineColor(result);
        div.classList.add("flex-div");
        containerDiv.appendChild(div);
    }
}

function determineColor(hexcode) {
    //reset variables
    hexArray = [];
    colorArray = [];
    light = 0;
    dark = 0;

    colorArray.push(hexcode.slice(1,3), hexcode.slice(3,5), hexcode.slice(5,8));
    colorArray.forEach(color => hexArray.push(parseInt(color, 16)));

    hexArray.forEach(hex => hex < 127.5 ? light++ : dark++);
    return light >= dark ?  "#FFF" :  "#000";
}

displayColors();


//randomHex courtesy of : https://github.com/noops-challenge/hexbot#note-to-developers
function randomHex() {
    const hexMax = 256 * 256 * 256; //number of possibilities -  R G B?
    return '#' + Math.floor(Math.random() * hexMax).toString(16).toUpperCase().padStart(6, '0');
    //toString(16) returns a hexidecimal number
    //padStart() 'pads' the number with 0s if it isn't 6 digits long
  }