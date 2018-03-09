const songs = [
  { id: 1, song: "canciónA", autor: "autorA", score: 30 },
  { id: 2, song: "canciónB", autor: "autorB", score: 33 },
  { id: 3, song: "canciónC", autor: "autorC", score: 23 },
  { id: 4, song: "canciónD", autor: "autorD", score: 10 },
  { id: 5, song: "canciónE", autor: "autorE", score: 3 },
  { id: 6, song: "canciónF", autor: "autorF", score: 13 }
];

currentID: 2;


//actions

export const next = () => ({
  type: "NEXT",
  icurrentID
});

export const preview = () => ({ 
  type: "PREVIEW", 
  currentID 
});

export const increase = (id) => ({
  type: "INCREASE",
  id
});

export const decreases = (id) => ({
  type: "DECREASE",
  id
});

export const Play = () => ({
  currentID
});

const newScore = (state = songs, action) => {
  switch (action.type) {
    case "INCREASE":
      state.score == state.score + 1;
      return state;
    // cómo hacer que sea el state del id indicado?
    case "DECREASE":
      state.score == state.score - 1;
      return state;
    // cómo hacer que sea el state del id indicado?
  }
};

export default newScore;

// usar map??
