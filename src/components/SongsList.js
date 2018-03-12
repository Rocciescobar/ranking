import React from 'react'
// import PropTypes from 'prop-types'
import Song from './Song'

const songs = [
  {id: 1, song: 'canciónA', autor: 'autorA', score: 33},
  {id: 2, song: 'canciónB', autor: 'autorB', score: 30},
  {id: 3, song: 'canciónC', autor: 'autorC', score: 23},
  {id: 4, song: 'canciónD', autor: 'autorD', score: 10},
  {id: 5, song: 'canciónE', autor: 'autorE', score: 13},
  {id: 6, song: 'canciónF', autor: 'autorF', score: 3},
];

const SongsList = () => (
  <ul style={{padding: 0, border:'solid black', borderWidth:'1px 1px 0 1px', width: '60%', margin: '0 auto 20px'}}>
  {songs.map(song =>
    <Song
      key={song.id}
      {...song}
    />
  )}
  </ul>
)

export default SongsList