import React, { useState } from 'react';
import InputRange from 'react-input-range';
import './MetronomeRange.css'

const MetronomeRange = ({}) => {

    const range = 46

    const [isPlaying, setIsPlaying] = useState(null)
    const [sliderValue, setSliderValue] = useState(50)

    const handlePlayPause = () => {
        console.log("play is clicked")
        setIsPlaying(!isPlaying)
    }

    const handleMinusBPM = () => {
        console.log("minus-button is clicked")
        
    }

    const handleAddBPM = () => {
        console.log("add-button is clicked")
        
    }

    const handleSliderMove = function(newValue) {
        setSliderValue(newValue)
    }

    return(
        <div className="range-container">
            <div className="range-header">
            <h1>{sliderValue}<span className="bpm">BPM</span></h1>
            <img
                className="play-button"
                src='https://image.freepik.com/free-icon/play-button_318-42541.jpg'
                onClick={handlePlayPause}
            />
            </div>
            <div className="range-content">
            <img onClick={handleMinusBPM} src="https://static.thenounproject.com/png/261368-200.png" width="25px"></img>



            <input onChange={(event) => handleSliderMove(event.target.value)} type="range" min="0" max="100" defaultValue={sliderValue} id="myRange"></input>


            <img onClick={handleAddBPM} src="https://static.thenounproject.com/png/645446-200.png" width="25px"></img>
            </div>
        </div>
        
    )
}

export default MetronomeRange;