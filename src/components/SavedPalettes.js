import React, {useEffect, useState} from 'react'
import SavedPaletteColor from './SavedPaletteColor'
import {db} from '../FirebaseDB'

const SavedPalettes = () => {
    const [palettes, setPalettes] = useState([]);

    useEffect(() => {
        db.collection("palettes")
        .orderBy('created', "desc")
        .get()
        .then(querySnapshot => {
            const palettes = querySnapshot.docs.map(doc => doc.data());
            console.log(palettes);
            setPalettes(palettes)
        })
    }, [])

    return (
        <main>
            <h1 style={{padding: '20px'}} >Saved Palettes</h1>
            <section className='saved-palette-grid'>
                {palettes && palettes.length > 0 && palettes.map((pal, idx)=>
                    <article key = {idx}>
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

export default SavedPalettes