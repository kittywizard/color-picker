import React from 'react'
import ColorBox from "./ColorBox";
import randomHex from './randomHex';

export default function App() {

  let colorNum = 16; 
  let colorArray = [];

    //initially generates an array with 16 different colors
    function generateArray(colorNum) {
        //add things to object
        for(let i = 0; i < colorNum; i++) {
          const colorObj = {
            id: i,
            key: i,
            hex: randomHex()
          }
          colorArray.push(colorObj);
        }
    }
    generateArray(colorNum);

    //set state here - so boxes has all of the initial colors in it
    const [boxes, setBoxColor] = React.useState(colorArray);

  //change the color of an individual box
  function changeColor(id) {
    setBoxColor(prevBox => {
        return prevBox.map(box => {
          return box.id === id ? {...box, hex: randomHex()} : box 
        })
    })
  }

    const displayArr = boxes.map(color => (
        <ColorBox 
          key={color.key}
          id={color.id}
          hex={color.hex}
          changeColor={() => changeColor(color.id)} //has to be an arrow function so you can pass in the id from here, react will remember
          />
      ))

  return ( 
      <div className= "container">
          {displayArr}
      </div>
  )
}