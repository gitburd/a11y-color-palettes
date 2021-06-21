export const setBackgroundColor = (backgroundColor) => {
  return (dispatch) => {
    dispatch({ type: "SET_BACKGROUND_COLOR", backgroundColor });
  };
};
export const setTextColor = (textColor) => {
  return (dispatch) => {
    dispatch({ type: "SET_TEXT_COLOR", textColor });
  };
};
export const setContrastColor = (contrastColor) => {
  return (dispatch) => {
    dispatch({ type: "SET_CONTRAST_COLOR", contrastColor });
  };
};
export const setPickerColor = (pickerColor) => {
  return (dispatch) => {
    dispatch({ type: "SET_PICKER_COLOR", pickerColor });
  };
};
export const setNewColor = (newColor) => {
  return (dispatch) => {
    dispatch({ type: "SET_NEW_COLOR", newColor });
  };
};
export const toggleColorPicker = (showColorPicker) => {
  return (dispatch) => {
    dispatch({ type: "TOGGEL_COLOR_PICKER", showColorPicker });
  };
};
