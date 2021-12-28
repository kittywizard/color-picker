      //randomHex courtesy of : https://github.com/noops-challenge/hexbot#note-to-developers
      export default function randomHex() {
        const hexMax = 256 * 256 * 256; //number of possibilities -  R G B?
        return '#' + Math.floor(Math.random() * hexMax).toString(16).toUpperCase().padStart(6, '0');
    //toString(16) returns a hexidecimal number
    //padStart() 'pads' the number with 0s if it isn't 6 digits long
}