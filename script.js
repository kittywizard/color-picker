
let colorNum = 16;
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

displayColors();

  //create a div square for each one 
  //make the color the background
  //add the hex code to the div
  //flex!

  //randomHex courtesy of : https://github.com/noops-challenge/hexbot#note-to-developers
function randomHex() {
    const hexMax = 256 * 256 * 256; //number of possibilities -  R G B?
    return '#' + Math.floor(Math.random() * hexMax).toString(16).toUpperCase().padStart(6, '0');
    //toString(16) returns a hexidecimal number
    //padStart() 'pads' the number with 0s if it isn't 6 digits long
  }