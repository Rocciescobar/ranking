import {createStore } from 'redux';

// Estados Iniciales
const initialState = [
  {id: 1, song: 'canciónA', autor: 'autorA', score: 30},
  {id: 2, song: 'canciónB', autor: 'autorB', score: 33},
  {id: 3, song: 'canciónC', autor: 'autorC', score: 23},
  {id: 4, song: 'canciónD', autor: 'autorD', score: 10},
  {id: 5, song: 'canciónE', autor: 'autorE', score: 3},
  {id: 6, song: 'canciónF', autor: 'autorF', score: 13},
];

// print
const print =  (state = initialState, action) =>{
  console.log(action.type);
    switch (action.type){
      
      case 'INCREASE' :
      return Object.assign({}, state, { score : parseInt(state.score + '1') });

      case 'DECREASE' : 
      return Object.assign({}, state, { score : parseInt(state.score - '1') });  
                
      default : 
      return state;
    }
    return state;
}

const store = createStore(print);

export default store;