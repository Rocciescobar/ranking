import React from 'react'
import Header from './Header'
import PlaySong from './PlaySong'
import './App.css'


const songs= [
  {id: 1, song: 'canciónA', autor: 'autorA', score: 30},
  {id: 2, song: 'canciónB', autor: 'autorB', score: 33},
  {id: 3, song: 'canciónC', autor: 'autorC', score: 23},
  {id: 4, song: 'canciónD', autor: 'autorD', score: 10},
  {id: 5, song: 'canciónE', autor: 'autorE', score: 3},
  {id: 6, song: 'canciónF', autor: 'autorF', score: 13},
];

const App = () => (
  <div className="App">
    <Header />
    <PlaySong />
    <ul style={{padding: 0, border:'solid black', borderWidth:'1px 1px 0 1px', width: '60%', margin: '0 auto 20px'}}>
      {songs.map(({ id, song, score }) =>
        <li
          key={id}
          style={{ listStyleType: 'none', borderBottom:'1px solid black', padding: '7px'}}
        >
          <span style={{ marginLeft: '10px', width: '75%', display: 'inline-grid' }}>{song}</span>
          <span style={{ width: '10%', display: 'inline-grid', textAlign:'center' }}>{score}</span>
          <button style={{marginRight: '2px'}}>
            <b>-</b>
          </button>
          <button style={{}}>
            <b>+</b>
          </button>
        </li>
      )}
    </ul>
  </div>
)

export default App
