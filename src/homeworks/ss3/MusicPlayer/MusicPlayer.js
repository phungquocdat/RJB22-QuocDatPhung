import React, { useState } from 'react'
import data from '../../../mock-db/musicplayer.json'
import ListMusicPlayer from './ListMusicPlayer';

export default function MusicPlayer() {

    console.log(data);
    // const [musicPlayer, setMusicPlayer] = useState(0)
  return (
    <div>
      {/* <div onClick={() => setMusicPlayer()}></div> */}
      {data.map((data,index) => {
        return(
          <div key={index}>
            <ListMusicPlayer key={`item-${index}`} index={index} data={data}  />
          </div>
        )
      })}
    </div>
  )
}
