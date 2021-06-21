import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

const initState = {
    msg: "reducer connected",
    backgroundColor: {hex:'#FFF'},
    textColor: {hex:'#000'},
    contrastColor: {
        hex: '#ffffff',
        rgb:{a:1,b:255,g:255,r:255},
        hsl: {a:1, h:0, l:1, s:0}
    },
    pickerColor: {hex: '#fff'},
    newColor: {hex: '#ffffff'},
    showColorPicker: true
};

const persistConfig = {
  key: "tools",
  storage: storage,
};

const toolReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_BACKGROUND_COLOR":
        console.log("OH NO!, WTF am I doing?", action.backgroundColor)
      return {
        ...state,
        backgroundColor: action.backgroundColor
      };
    case "SET_TEXT_COLOR":
    return {
        ...state,
        textColor: action.textColor
    };
    case "SET_CONTRAST_COLOR":
        return {
            ...state,
            contrastColor: action.contrastColor
        };
    case "SET_PICKER_COLOR":
    return {
        ...state,
        pickerColor: action.pickerColor
    };
    case "SET_NEW_COLOR":
        return {
            ...state,
            newColor: action.newColor
        };
    case "TOGGEL_COLOR_PICKER":
        return {
            ...state,
            showColorPicker: action.showColorPicker
        };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, toolReducer);
