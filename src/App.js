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

    const [boxes, setBoxColor] = React.useState(colorArray);

    //change the color of an individual box
  function changeColor(id) {
    setBoxColor(prevBox => {
        return prevBox.map(box => {
          return box.id === id ? {...prevBox, hex: randomHex()} : box 
        })
    })
  }

    const displayArr = boxes.map(color => (
        <ColorBox 
          key={color.key}
          id={color.id}
          hex={color.hex}
          changeColor={() => changeColor(color.id)}
          />
      ))

  return ( 
      <div className= "container">
          {displayArr}
      </div>
  )
}