import React from 'react'
import logo from '../logo.png'
import next from '../lef.png'
import preview from '../rigth.png'
import './App.css'


const App = () => (
  <div className="App Center">
    <header className="App-header">
      <img src={logo} className="App-logo"/>
      <h1 className="App-title">Ranking Music</h1>
    </header>
    <div className="Play">
      <div className="Inline Next">
        <button><img src={next}/></button>
      </div>
      <div className="Reproducer Inline"> 
        <h2>Title</h2>
        <p>Autor</p>
      </div>
      <div className="Inline Preview">
        <button><img src={preview}/></button>
      </div>
    </div>
  </div>
)

export default App