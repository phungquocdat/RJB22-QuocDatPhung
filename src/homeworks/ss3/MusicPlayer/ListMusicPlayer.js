import React, { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai';

export default function ListMusicPlayer(props) {
    const {data,index} = props
    const [isPlay, setIsPlay] = useState(false)
    const user = [{}]
  return (
    <div key={`item-${index}`} >
       <div> 
        {data.id}
        {data.thumnail}
        <AiFillPlayCircle onClick={() => setIsPlay(!isPlay)} />
        {data.name}
        {data.singer}
        {data.duration}
        {data.isLike}
    </div>
     
    </div>
  )
}
