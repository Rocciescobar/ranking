import React from 'react'
import next from '../lef.png'
import preview from '../rigth.png'
import './App.css'

const PlaySong = ({onClick}) => (
  <div className="Play">
    <span onClick={onClick} className="Inline Next"><img src={next}/></span>
    <div className="Reproducer Inline"> 
      <h2>Title</h2>
      <p>Autor</p>
    </div>
    <span onClick={onClick} className="Inline Next"><img src={preview}/></span>
  </div>
)

export default PlaySong