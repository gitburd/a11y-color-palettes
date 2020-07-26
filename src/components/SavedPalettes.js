import React, {useEffect, useState} from 'react'
import SavedPaletteColor from './SavedPaletteColor'
import {db} from '../FirebaseDB'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ReactTooltip from 'react-tooltip';

const SavedPalettes = ({addToPalette}) => {
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
        <div>
            <h1 style={{padding: '20px'}} >Saved Palettes</h1>
            <div className='saved-palette-grid'>
                {palettes && palettes.length > 0 && palettes.map((pal, idx)=>
                    <div key = {idx}>
                        {pal && pal.colors && pal.colors.length > 0 
                        && pal.colors.map((color, idx) => 
                            <SavedPaletteColor  
                                key={idx} hex={color.hex} color={color} 
                                addToPalette={addToPalette}
                            />
                        )}
                    </div>
                )}
            </div>
            {/* <div   style={{zIndex:'100'}}>
                <ToastContainer
                    autoClose={3500} 
                    position="top-right"
                />
            </div>
            <ReactTooltip place='top' effect='solid'/> */}
        </div>
    )
}

export default SavedPalettes