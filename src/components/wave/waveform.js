import React, { lazy, Suspense} from 'react'
import audio from '../../images/sound/audio.mp3'
import './wave.css'

const ReactWaves = lazy(() => import('@dschoon/react-waves'), "default");

export default class Waveform extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        wavesurfer: null,
        playing: false,
        pos: 0,
        };
    }

    onPosChange = (pos, wavesurfer) => {
        if (pos !== this.state.pos) {
        this.setState({ pos, wavesurfer });
        }
    };

    onSeek = ({ pos, wavesurfer }) => {
        console.log(pos);
    }

    skipAhead = () => {
        this.state.wavesurfer.seekTo(this.secondsToPosition(this.state.pos + 10));
    };

    secondsToPosition = (sec) => {
        return 1 / this.state.wavesurfer.getDuration() * sec;
    };

    render() {
        return (
        <div className={'container example'}>
            <button className="play button"
                onClick={() => { this.setState({ playing: !this.state.playing }) }}
                style={{left: '-99px'}}
            >
                <a/>
            { !this.state.playing ? '▶' : '||' }
            </button>
            {/* <div className="skip button"
                onClick={this.state.wavesurfer && this.skipAhead}
                style={
                this.state.wavesurfer ? {} : {opacity: '.4', cursor: 'default'}
                }
            >
            { '⏩' }
            </div> */}
            <Suspense fallback={<div>Loading...</div>}>
                <ReactWaves
                audioFile={audio}
                className='react-waves'
                options={{
                    barHeight: 1,
                    cursorWidth: 2,
                    cursorColor: '#b4abea',
                    height: 200,
                    hideScrollbar: true,
                    progressColor: '#c2bce7',
                    responsive: true,
                    waveColor: '#555555e3',
                }}
                volume={1}
                zoom={1}
                playing={this.state.playing}
                pos={this.state.pos}
                onPosChange={this.onPosChange}
                onSeek={this.onSeek}
                />
            </Suspense>
        </div>
        )
    }
}