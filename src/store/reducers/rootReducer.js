import { combineReducers } from "redux";
import toolsReducer from "./toolsReducer";
import paletteReducer from "./paletteReducer";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  tools: toolsReducer,
  palette: paletteReducer,
  auth: authReducer,
  firebase: firebaseReducer
});

export default rootReducer;
