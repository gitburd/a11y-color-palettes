import { db } from '../../FirebaseDB'

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
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const userID = getState().firebase.auth.uid;
    console.log(palette)

    let newPalette = {
      colors: palette,
      created: new Date()
    }
    if (userID) {
      newPalette.userID = userID
    }
    db.collection("palettes").add(newPalette)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        return (dispatch) => {
          dispatch({ type: "SAVE_PALETTE", palette });
        };
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };
};

export const getPalettes = (authId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const palettes = []
    firestore.collection('palettes').where("userID", "==", `${authId}`).get()
      .then(function (querySnapshot) {
        let palette;
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          palette = doc.data();
          palette.id = doc.id
          palettes.push(palette)
        });
        dispatch({ type: 'GET_PALETTES', palettes });
      }).catch((err) => {
        dispatch({ type: 'GET_PALETTES_ERROR', err })
      })
  }
};


export const deletePalette = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection("palettes").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
      dispatch({ type: 'DELETE_PALETTE', paletteId: id });
    })
      .catch(function (error) {
        console.error("Error removing document: ", error);
        dispatch({ type: 'DELETE_PALETTE_ERROR', error })
      });
  }
};
