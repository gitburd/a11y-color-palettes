import React from 'react'
import SavedPaletteColor from './SavedPaletteColor'

const SavedPalettes = ({palettes}) => {
    return (
        <div style={{margin:'20px'}}>
            <h1>Saved Palettes</h1>
            <div className='saved-palette-grid'>
                {palettes && palettes.length && palettes.map((pal, idx)=>
                    <div>
                        {pal.map((color, idx) => 
                            <SavedPaletteColor color={color}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SavedPalettes