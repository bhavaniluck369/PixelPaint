import React, { useRef } from 'react'
import Row from './Row'
import { exportComponentAsPNG } from "react-component-export-image";

function DrawingPanel(props) {
    const {width,height,selectedColor} = props;

    const panelRef = useRef();
    let rows = [];

    for(let i=0;i < height;i++){
        rows.push(<Row key={i} selectedColor={selectedColor} width={width}/>)
    }
  return (
    <div id='drawingPanel'>
      <div id='pixels' ref={panelRef}>
        {rows}
      </div>
      <button onClick={() => exportComponentAsPNG(panelRef)} className='button'>
        Export as PNG
      </button>
    </div>
  )
}

export default DrawingPanel
