import React, { useState, useEffect } from 'react';
import InputRange from 'react-input-range';
import './metronome.css'

const MetronomeRange = () => {
    
    const [isPlaying, setIsPlaying] = useState(null)
    const [sliderValue, setSliderValue] = useState(140)
    const [intervalID,setIntervalID] = useState(null)

    const click1 = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav");
    const fart = new Audio('https://www.soundjay.com/human/sounds/fart-01.mp3');

    useEffect(() => {
        
      }, [isPlaying])

    const startInterval = () => {
        let BPM = (1000 * 60) / sliderValue
        const startMetronome = setInterval(function(){ click1.play(); }, BPM )
        setIntervalID(startMetronome)
    }
    
    const startGiggle = () => {
        let BPM = (1000 * 60) / sliderValue
        const startMetronome = setInterval(function(){ fart.play(); }, BPM )
        setIntervalID(startMetronome)
    }

    const stopInterval = () => {
        clearInterval(intervalID)
        setIntervalID(null)
    }

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    const handleAddBPM = () => {
        console.log("add-button is clicked")
        
    }

    const handleSliderMove = function(newValue) {
        setSliderValue(newValue)
        // calcluateInterval = (newValue / 60) * 1000
    }

    return(
        <div className="metronome">
            <div className="container">
                <div className="bpm-slider">
                    <h1>{sliderValue}<span className="bpm">BPM</span></h1>
                    <input onChange={(event) => handleSliderMove(event.target.value)} type="range" min="40" max="240" defaultValue={sliderValue} id="myRange"></input>
                </div>
                {/* <input onChange={(event) => handleSliderMove(event.target.value)} type="range" min="40" max="240" defaultValue={sliderValue} id="myRange"></input> */}
                <div className="range-content">
                <button className="metronome-button" onClick={startInterval}>Start</button>
                <button className="metronome-button" onClick={stopInterval}>Stop</button>
                <button className="giggle-button" onClick={startGiggle}>Have a Giggle</button>
                <audio controls>
                {/* <source src="horse.ogg" type="audio/ogg"> */}
                Your browser does not support the audio element.
                </audio>
                {/* <input onChange={(event) => handleSliderMove(event.target.value)} type="range" min="40" max="240" defaultValue={sliderValue} id="myRange"></input> */}
                </div>
            </div>
        </div>
        
    )
}

export default MetronomeRange;