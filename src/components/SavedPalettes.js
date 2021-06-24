import React, { useEffect, useState } from 'react'
import SavedPaletteColor from './SavedPaletteColor'
import { db } from '../FirebaseDB'
import { getExamplePalettes } from "../store/actions/paletteActions"
import { useDispatch, useSelector, shallowEqual } from "react-redux";

const SavedPalettes = ({ showToast }) => {
    const dispatch = useDispatch();
    const { palettes } = useSelector(
        (state) => ({
            palettes: state.palette.examplePalettes
        }),
        shallowEqual
    );
    useEffect(() => {
        dispatch(getExamplePalettes())
    }, [])


    const contrast = [
        [
            { background: "#4a3506", color: "#ffcd19", border: "#e9cd8f", contrast: 7.76 },
            { background: "#4a3506", color: "#e9cd8f", border: "#e9cd8f", contrast: 7.54 },
            { background: "#751f1f", color: "#ffcd19", border: "#e9cd8f", contrast: 7.10 },
            { background: "#751f1f", color: "#e9cd8f", border: "#e9cd8f", contrast: 6.89 },

        ],
        [
            { background: "#142b41", color: "#efc710", border: "#b4c9e4", contrast: 8.85 },
            { background: "#142b41", color: "#b4c9e4", border: "#b4c9e4", contrast: 8.55 },
            { background: "#083667", color: "#efc710", border: "#b4c9e4", contrast: 7.41 },
            { background: "#083667", color: "#b4c9e4", border: "#b4c9e4", contrast: 7.16 }
        ],
        [
            { background: "#03392f", color: "#f6f6f6", border: "#1ee494", contrast: 11.92 },
            { background: "#03392f", color: "#1ee494", border: "#1ee494", contrast: 7.72 },
            { background: "#03392f", color: "#ff8a14", border: "#1ee494", contrast: 5.46 }
        ],
        [
            { background: "#201e20", color: "#ddc3a5", border: "#ddc3a5", contrast: 9.80 },
            { background: "#201e20", color: "#e0a96d", border: "#ddc3a5", contrast: 7.94 },
            { background: "#561039", color: "#ddc3a5", border: "#ddc3a5", contrast: 8.13 },
            { background: "#561039", color: "#e0a96d", border: "#ddc3a5", contrast: 6.58 }
        ],
        [
            { background: "#4a0e5c", color: "#ccf0c3", border: "#ccf0c3", contrast: 11.15 },
            { background: "#4a0e5c", color: "#ffc2ff", border: "#ccf0c3", contrast: 9.55 },
            { background: "#7c4789", color: "#ccf0c3", border: "#ccf0c3", contrast: 5.39 },
            { background: "#7c4789", color: "#ffc2ff", border: "#ccf0c3", contrast: 4.62 }
        ],
        [
            { background: "#1e3d59", color: "#f5f0e1", border: "#F8DDAF", contrast: 9.87 },
            { background: "#1e3d59", color: "#F8DDAF", border: "#F8DDAF", contrast: 8.54 },
            { background: "#1e3d59", color: "#ff8a14", border: "#F8DDAF", contrast: 5.47 }
        ],
        [
            { background: "#e2d810", color: "#332e2f", border: "#332e2f", contrast: 8.94 },
            { background: "#fd5ebc", color: "332e2f", border: "#332e2f", contrast: 4.77 },
            { background: "#12a4d9", color: "332e2f", border: "#332e2f", contrast: 4.67 }

        ],
        [
            { background: "#1c1124", color: "#f7ffcd", border: "#f7ffcd", contrast: 17.44 },
            { background: "#1c1124", color: "#badf96", border: "#f7ffcd", contrast: 12.19 },
            { background: "#693e52", color: "#f7ffcd", border: "#f7ffcd", contrast: 8.35 },
            { background: "#693e52", color: "#badf96", border: "#f7ffcd", contrast: 5.84 },
        ],
        [
            { background: "#1f441e", color: "#cee6b4", border: "#cee6b4", contrast: 8.20 },
            { background: "#1f441e", color: "#9ecca4", border: "#cee6b4", contrast: 6.11 },
            { background: "#7d0951", color: "#cee6b4", border: "#cee6b4", contrast: 7.69 },
            { background: "#7d0951", color: "#9ecca4", border: "#cee6b4", contrast: 5.73 }
        ]
    ]

    return (
        <main>
            <h1 style={{ padding: '20px' }} >Example Palettes</h1>
            <section className='saved-palette-grid'>
                {palettes && palettes.length > 0 && palettes.map((pal, idx) =>
                    <article key={idx}>
                        {pal && pal.colors && pal.colors.length > 0
                            && pal.colors.map((color, idx) =>
                                <SavedPaletteColor
                                    key={idx} hex={color.hex} color={color} showToast={showToast}
                                />
                            )}
                        <section style={{ margin: '20px', width: '200px' }}>
                            {contrast[idx].map((row, i) =>
                                <p key={idx + i} style={{ padding: "5px 15px", fontSize: "18px", margin: '0', backgroundColor: `${row.background}`, color: `${row.color}`, border: `1px solid ${row.border}` }}>
                                    CONTRAST: <b>{row.contrast}</b>
                                </p>)
                            }
                        </section>

                    </article>
                )}
            </section>
        </main>
    )
}

export default SavedPalettes