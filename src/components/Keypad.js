// Code Keypad Component Here
import React from 'react'

function Keypad() {
    function typePassword() {
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={typePassword} />
    )
}

export default Keypad;