import React, { useEffect, useState } from 'react'
import SavedPaletteColor from './SavedPaletteColor'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getPalettes } from "../store/actions/paletteActions"

const UserPalettes = () => {
    const { palettes, authId } = useSelector(
        (state) => ({
            palettes: state.palette.palettes,
            authId: state.firebase.auth.uid
        }),
        shallowEqual
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPalettes(authId))
    }, [authId])

    return (
        <main>
            <h1 style={{ padding: '20px' }} >Saved Palettes</h1>
            <section className='saved-palette-grid'>
                {palettes && palettes.length > 0 && palettes.map((pal, idx) =>
                    <article key={idx}>
                        {pal && pal.colors && pal.colors.length > 0
                            && pal.colors.map((color, idx) =>
                                <SavedPaletteColor
                                    key={idx} hex={color.hex} color={color}
                                />
                            )}
                    </article>
                )}
            </section>
        </main>
    )
}

export default UserPalettes