import React from 'react'
import next from '../lef.png'
import preview from '../rigth.png'
import './App.css'

const PlaySong = () => (
  <div className="Play">
    <a className="Inline Next"><img src={next} alt='arrow left'/></a>
    <div className="Reproducer Inline"> 
      <h2>Title</h2>
      <p>Autor</p>
    </div>
    <a className="Inline Next"><img src={preview} alt='arrow rigth'/></a>
  </div>
)

export default PlaySong