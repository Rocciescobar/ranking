import React from 'react'
import logo from '../logo.png'
// import next from '../lef.png'
import './App.css'


{
  const songs= [
    {
      id: 1,
      song: 'canciónA',
      autor: 'autorA',
      score: 30
    },
    {
      id: 2,
      song: 'canciónB',
      autor: 'autorB',
      score: 33
    },
    {
      id: 3,
      song: 'canciónC',
      autor: 'autorC',
      score: 23
    },
    {
      id: 4,
      song: 'canciónD',
      autor: 'autorD',
      score: 10
    },
    {
      id: 5,
      song: 'canciónE',
      autor: 'autorE',
      score: 3
    },
    {
      id: 6,
      song: 'canciónF',
      autor: 'autorF',
      score: 13
    },
  ];
  currentID: 2
}

const App = () => (
  <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Ranking Music</h1>
      </header>
    </div>
    <div className="reproducer">

    </div>
  </div>
)

export default App