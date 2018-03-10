import React from 'react'
// import PropTypes from 'prop-types'

const Song = ({song, score}) => (
  <li
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
)

// Todo.propTypes = {
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Song