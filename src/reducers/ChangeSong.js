currentID: 2;

//actions

// export const next = () => ({
//   type: "NEXT",
//   icurrentID
// });

// export const preview = () => ({
//   type: "PREVIEW",
//   currentID
// });

// export const Play = () => ({
//   currentID
// });

const ChangeSong = (state = songs, action) => {
  switch (action.type) {
    case "NEXT":
      return currentID = currentID + 1;
    case "PREVIEW":
      return currentID = currentID - 1;
  }
};

// play?

export default ChangeSong;
