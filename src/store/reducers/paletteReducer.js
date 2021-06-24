import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

const initState = {
  palette: [],
  palettes: [],
  loadPalettes: false,
  examplePalettes: []
};

const persistConfig = {
  key: "palette",
  storage: storage,
};

const paletteReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_COLOR_TO_PALETTE":
      return {
        ...state,
        palette: [...state.palette, action.color]
      };
    case "REMOVE_COLOR_FROM_PALETTE":
      let palette = [...state.palette]
      palette = palette.filter((color, idx) => { return idx !== action.index })
      return {
        ...state,
        palette: palette
      };
    case "SAVE_PALETTE":
      return {
        ...state,
        backgroundColor: action.backgroundColor
      };
    case "GET_PALETTES":
      console.log("reducer!", action.palettes)
      return {
        ...state,
        palettes: action.palettes
      };
    case "GET_PALETTES_ERROR":
      return {
        ...state,
        palettes: []
      };
    case "GET_EXAMPLE_PALETTES":
      console.log("reducer!", action.palettes)
      return {
        ...state,
        examplePalettes: action.palettes
      };
    case "GET_EXAMPLE_PALETTES_ERROR":
      return {
        ...state,
        examplePalettes: []
      };
    case "DELETE_PALETTE":
      console.log("reducer!", action.paletteId)
      return {
        ...state,
        loadPalettes: !state.loadPalettes
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, paletteReducer);
