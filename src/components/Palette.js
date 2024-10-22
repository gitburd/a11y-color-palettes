import React from 'react';
import { Link } from 'react-router-dom';
import Color from './Color';
import ReactTooltip from 'react-tooltip';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { savePalette } from "../store/actions/paletteActions"

const Palette = ({ showToast }) => {
  const { palette, authId } = useSelector(
    (state) => ({
      palette: state.palette.palette,
      authId: state.firebase.auth.uid
    }),
    shallowEqual
  );

  const dispatch = useDispatch()
  if (!palette || palette.length === 0) {
    return (
      <section id="empty-palette-msg">
        <h2>Your Palette is empty.</h2>
        <h2> Use the color picker get started.</h2>
        <i style={{ animation: 'slide1 1s ease-in-out infinite', fontSize: '60px' }} className="fa fa-long-arrow-right arrow1" aria-hidden="true"></i>
        <h2>New to A11y Palette?</h2>
        <Link to='/about'>
          <button className='cta-btn'>Watch our demos</button>
        </Link>
      </section>
    );
  }
  const onSave = (palette) => {
    dispatch(savePalette(palette));
    showToast('save-palette', null)
  }

  const save = authId ?
    <i
      onClick={() => onSave(palette)}
      className="fa fa-floppy-o icon"
      aria-hidden="true"
      data-tip="save"
      style={{ float: 'right' }}
    ></i>
    :
    <span className="red-text small-text">*Signup/Login to save</span>

  return (
    <article>
      <h1 style={{ padding: '5px 20px', margin: '0' }}>
        Palette {' '}
        {save}
      </h1>

      {palette && palette.length > 0 && (
        palette.map((color, idx) => (
          <Color
            idx={idx}
            key={idx}
            color={color}
            showToast={showToast}
          />
        ))
      )}
      <ReactTooltip place='top' effect='solid' />
    </article>
  )
}

export default Palette;