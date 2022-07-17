import React, { Component } from 'react'
import audio from './audio1.mp3'
import { AiFillPlayCircle } from 'react-icons/ai';


export default class Audio1 extends Component {
constructor (props) {
    super(props);
    this.state = {
        play: false
    }
}
setPlay= () => {
    this.setState({
        play: !this.state.play
    })
} 
playAudio = () => {
  new Audio(audio).play();
}

  render() {
    return (
      <div>
        <AiFillPlayCircle  onClick={this.setPlay}>{this.state.play ? this.playAudio() : ""}</AiFillPlayCircle>
      </div>
    )
  }
}
