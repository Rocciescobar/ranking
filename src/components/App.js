import React from 'react'
import Header from './Header'
import PlaySong from './PlaySong'
import SongsList from './SongsList'
import './App.css'


const App = () => (
  <div className="App">
    <Header />
    <PlaySong />
    <SongsList />
  </div>
)

export default App