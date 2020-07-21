import React, {useEffect, useState} from 'react'
import SavedPaletteColor from './SavedPaletteColor'
import {db} from '../FirebaseDB'

const SavedPalettes = () => {
    const [palettes, setPalettes] = useState([]);

    useEffect(() => {
        db.collection("palettes")
        .get()
        .then(querySnapshot => {
            const palettes = querySnapshot.docs.map(doc => doc.data());
            console.log(palettes);
            setPalettes(palettes)
        })
    }, [])
    
    return (
        <div style={{margin: '20px'}}>
            <h1>Saved Palettes</h1>
            <div className='saved-palette-grid'>
                {palettes && palettes.length > 0 && palettes.map((pal, idx)=>
                    <div>
                        {pal && pal.colors && pal.colors.length > 0 && pal.colors.map((color, idx) => 
                            <SavedPaletteColor  key={idx} hex={color.hex}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SavedPalettes