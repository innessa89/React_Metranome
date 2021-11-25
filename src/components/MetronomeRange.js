import React, { useState, useRef } from 'react';
import './MetronomeRange.css'

const MetronomeRange = ({}) => {
    const range = 46

    const [isPlaying, setIsPlaying] = useState(null)

    const handlePlayPause = () => {
        console.log("play is clicked")
        setIsPlaying(!isPlaying)
    }

    return(
        <div>
            <h1>{range}<span class="bpm">BPM</span></h1>
            <img
                class="play-button"
                src='https://image.freepik.com/free-icon/play-button_318-42541.jpg'
                onClick={handlePlayPause}
            />
            
        </div>
    )
}

export default MetronomeRange;