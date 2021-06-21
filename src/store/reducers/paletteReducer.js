import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

const initState = {
    palette: [],
    palettes:[]
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
      palette = palette.filter((color, idx) => {return idx !== action.index})
      return {
        ...state,
        palette: palette
    };
    case "SAVE_PALETTE":
      return {
        ...state,
        backgroundColor: action.backgroundColor
    };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, paletteReducer);
