import React, { useState } from 'react'
import datas from '../../../mock-db/musicplayer.json'
import ListMusicPlayer from './ListMusicPlayer';

export default function MusicPlayer() {

    console.log(datas);
    // const [musicPlayer, setMusicPlayer] = useState(0)
  return (
    <div>
      {/* <div onClick={() => setMusicPlayer()}></div> */}
      {datas.map((data,index) => {
        return(
          <div key={index}>
            <ListMusicPlayer key={`item-${index}`} index={index} data={data}  />
          </div>
        )
      })}
    </div>
  )
}
