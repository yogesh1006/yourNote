import React, { useState } from 'react'

function NoteColors() {
    const [color,setColor]=useState([
    "#FFFFFF",
    "#f28983",
    "#fbbc04",
    "#FFF475",
    "#CCFF90",
    "#A7FFEB",
    "#CBF0F8",
    "#AECBFA",
    "#D7AEFB",
    "#FDCFE8",
    "#E6C9A8",
    "#E8EAED"])
    return (
        <div>
            {color.map((clr )=>{
                <div>
                    
                </div>
            })}
            
        </div>
    )
}

export default NoteColors
