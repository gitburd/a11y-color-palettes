import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {setBackgroundColor, setTextColor} from "../store/actions/toolsActions"; 
import { addToPalette } from "../store/actions/paletteActions";


const ColorPickerDisplay = () => {

  
  const dispatch = useDispatch();
  const { color,palette, newColor } = useSelector(
    (state) => ({
      color: state.tools.pickerColor,
      palette: state.palette.palette,
      newColor: state.tools.newColor
    }),
    shallowEqual
  );

  const onCopy = (hex) => {
    toast.dark(`Copied ${hex}`);
  };
  const addBtnClass =
    palette && palette.length > 0 ? "display-btn" : "btn-pulse";


  return (
    <section>
      <h1 style={{ padding: "5px 20px", margin: "0" }}>Tools</h1>
      <article className="btn-grid">
      <p className={addBtnClass} onClick={() => dispatch(addToPalette(color))}>
          Add to Palette
        </p>
        <CopyToClipboard text={color} onCopy={(color) => onCopy(color)}>
          <p className="display-btn" onClick={(color) => console.log(color)}>
            Copy
          </p>
        </CopyToClipboard>
        <p className="display-btn" onClick={() => dispatch(setBackgroundColor(color))}>
          Backgorund
        </p>
        <p className="display-btn" onClick={() => dispatch(setTextColor(color))}>
          Text Color
        </p>
      </article>
      <ToastContainer autoClose={3000} position="top-center" />
    </section>
  );
};

export default ColorPickerDisplay;
