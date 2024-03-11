import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import DrawingPanel from './DrawingPanel';

function Editor() {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState('Start Drawing');
    const [selectedColor, setSelectedColor] = useState('#ff4436');
    const [eraserMode, setEraserMode] = useState(false);

    function initializeDrawingPanel() {
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);
        buttonText === "Start Drawing" ? setButtonText("Reset") : setButtonText("Start Drawing")
    }

    function changeColor(color) {
        setSelectedColor(color.hex);
        setEraserMode(false);
    }

    function toggleEraserMode() {
        setEraserMode(!eraserMode);
        setSelectedColor('#fff');
    }

    return (
        <div id='editor'>
            <h1>Pixels Art</h1>
            {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
            {hideDrawingPanel && (
                <div id="options">
                    <div className="option">
                        <input type="number" className='panelInput' defaultValue={panelWidth} onChange={(e) => { setPanelWidth(e.target.value) }} />
                        <span>Width</span>
                    </div>
                    <div className="option">
                        <input type="number" className='panelInput' defaultValue={panelHeight} onChange={(e) => { setPanelHeight(e.target.value) }} />
                        <span>Height</span>
                    </div>
                </div>
            )}

            
            <div className='buttons-group'>
                <button className='button' onClick={initializeDrawingPanel}>
                    {buttonText}
                </button>
                {hideOptions &&
                <button className='button' onClick={toggleEraserMode}>
                    Eraser
                </button>
                }
            </div>
            


            {hideOptions &&
                (<SketchPicker className='sketch-picker' color={selectedColor} onChangeComplete={changeColor} />)}

            {hideOptions &&
                (<DrawingPanel width={panelWidth} height={panelHeight} selectedColor={selectedColor} />)}
        </div>
    )
}

export default Editor