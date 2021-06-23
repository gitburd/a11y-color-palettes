import React, { useEffect, useState } from 'react'
import SavedPaletteColor from './SavedPaletteColor'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getPalettes } from "../store/actions/paletteActions"
import { deletePalette } from "../store/actions/paletteActions";
import { Redirect } from 'react-router-dom'

const UserPalettes = ({ showToast }) => {
    const { palettes, loadPalettes, authId } = useSelector(
        (state) => ({
            palettes: state.palette.palettes,
            loadPalettes: state.palette.loadPalettes,
            authId: state.firebase.auth.uid
        }),
        shallowEqual
    );
    const dispatch = useDispatch();

    const del = (e, palette) => {
        e.preventDefault();
        dispatch(deletePalette(palette.id))
    }

    useEffect(() => {
        dispatch(getPalettes(authId))
    }, [authId, loadPalettes])

    if (!authId) return (
        <main><h1 style={{ margin: "40vh auto", textAlign: 'center' }}>Login to view your saved palettes.</h1></main>
    )
    return (
        <main>
            <h1 style={{ padding: '0 20px', margin: '20px 0 0 0' }}>Saved Palettes</h1>
            <section className='saved-palette-grid'>
                {palettes && palettes.length > 0 && palettes.map(pal =>
                    <article key={pal.id}>
                        <p
                            className='icon'
                            style={{
                                fontSize: 'large',
                                margin: '12px 0 12px 88%'
                            }}
                        >
                            <i className="fa fa-trash-o" data-tip="Delete" onClick={e => del(e, pal)}></i>
                        </p>

                        {pal && pal.colors && pal.colors.length > 0
                            && pal.colors.map((color, idx) =>
                                <SavedPaletteColor
                                    key={idx} hex={color.hex} color={color} showToast={showToast}
                                />
                            )}
                    </article>
                )}
            </section>
        </main>
    )
}

export default UserPalettes