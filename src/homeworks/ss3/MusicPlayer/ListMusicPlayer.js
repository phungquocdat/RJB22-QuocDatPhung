import React, { useState } from 'react'
// import { AiFillPlayCircle } from 'react-icons/ai';
import Audio1 from './Audio1';


export default function ListMusicPlayer(props) {
    const {data,index} = props
    // const [isPlay, setIsPlay] = useState(false)
  return (
    <div key={`item-${index}`} >
       <div> 
        {data.id}
        {data.thumnail}
        {/* <button onClick={() => setIsPlay(!isPlay)}></button> */}
        <Audio1 controls autoplay muted/>
        {data.name}
        {data.singer}
        {data.duration}
        {data.isLike}
    </div>
     
    </div>
  )
}
