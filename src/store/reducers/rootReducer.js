import { combineReducers } from "redux";
import toolsReducer from "./toolsReducer";
import paletteReducer from "./paletteReducer";

const rootReducer = combineReducers({
  tools: toolsReducer,
  palette: paletteReducer
});

export default rootReducer;
