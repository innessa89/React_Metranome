import React, { useState, useEffect } from 'react';
import InputRange from 'react-input-range';
import './MetronomeRange.css'

const MetronomeRange = () => {

    const range = 46

    // const [metronome, setMetronome]= useState({
    //     isPlaying: false,
    //     count: 0,
    //     bpm: 100,
    //     beatsPerMeasure: 4
    //   }
    // )

    
    const [isPlaying, setIsPlaying] = useState(null)
    const [sliderValue, setSliderValue] = useState(50)

    const click1 = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav");

    useEffect(() => {
        
        if (isPlaying === null) return
        isPlaying ? click1.play() : click1.pause()
      }, [isPlaying])

    const handlePlayPause = () => {
        // playSound()
        console.log("play is clicked")
        setIsPlaying(!isPlaying)
    }

    // const handleMinusBPM = () => {
    //     console.log("minus-button is clicked")
        
    // }

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
            <button onClick={handlePlayPause}>{isPlaying ? "Stop" : "Start"}</button>
            {/* <img onClick={handleMinusBPM} src="https://static.thenounproject.com/png/261368-200.png" width="25px"></img> */}



            <input onChange={(event) => handleSliderMove(event.target.value)} type="range" min="0" max="100" defaultValue={sliderValue} id="myRange"></input>


            <img onClick={handleAddBPM} src="https://static.thenounproject.com/png/645446-200.png" width="25px"></img>
            </div>
        </div>
        
    )
}

export default MetronomeRange;