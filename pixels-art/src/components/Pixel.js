import React, { useState } from 'react'

function Pixel(props) {
    const { selectedColor, eraserMode } = props;

    const [pixelColor, setPixelColor] = useState('#fff');
    // const [oldColor, setOldColor] = useState(pixelColor);
    // const [canChangeColor, setCanChangeColor] = useState(true);
    const [isDrawing, setIsDrawing] = useState(false);

    function applyColor(){
        const newColor = eraserMode ? '#fff' : selectedColor
        setPixelColor(newColor);
        // setCanChangeColor(false)
    }
    
    function changeColorOnHover(){
        if(isDrawing){
            applyColor();
        }
    }

    function resetColor(){
       setIsDrawing(false)
    }

    return (
        <div style={{ backgroundColor: pixelColor }}
            onMouseDown={applyColor}
            onMouseEnter={changeColorOnHover}
            onMouseLeave={resetColor}
            onMouseUp={resetColor}
            className='pixel'>
        </div>
    )
}

export default Pixel