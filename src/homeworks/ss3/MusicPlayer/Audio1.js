import React, { Component } from 'react'
import audio from './audio1.mp3'
import { AiFillPlayCircle } from 'react-icons/ai';


const x = {audio}
export default class Audio1 extends Component {

playAudio = () => {
  x.play();
}
pauseAudio = () => {
  x.pause();
}

render() {
  return (
      <div>
        <button onClick={this.playAudio}>PLAY AUDIO</button>
        <button onClick={this.pauseAudio}>Pause AUDIO</button>
      </div>
  );
}
}
