import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import audio from '../../images/sound/audio.mp3'

const Player = () => {
    return (
        <AudioPlayer
            autoPlay
            src={audio}
            onPlay={e => console.log("onPlay")}
            style={{ width: "80%" }}
        />

    )
}

export default Player
