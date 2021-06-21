import {db} from '../../FirebaseDB'

export const addToPalette = (color) => {
    return (dispatch) => {
      dispatch({ type: "ADD_COLOR_TO_PALETTE", color });
    };
};

export const removeFromPalette = (index) => {
    return (dispatch) => {
      dispatch({ type: "REMOVE_COLOR_FROM_PALETTE", index });
    };
};

export const savePalette = (palette) => {
  return async () => {
    console.log(palette)
    db.collection("palettes").add({
        colors: palette,
        created: new Date()
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        return (dispatch) => {
            dispatch({ type: "SAVE_PALETTE", palette });
        };
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  };
};

