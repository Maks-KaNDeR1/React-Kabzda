import React, { useState } from 'react'
import '../Switch/Switch.css'


function Button() {

    let [switchOnOf, setSwitch] = useState(false)

    const handleOnClick = () => {
        setSwitch(true)
    }

    const handleOffClick = () => {
        setSwitch(false)
    }

    return (
        <div className='onOf'>
            <button onClick={handleOnClick}
                style={{ backgroundColor: switchOnOf ? 'blueviolet' : '' }}
                className='button'
            >Eeee
            </button>
            <button onClick={handleOffClick}
                style={{ backgroundColor: switchOnOf ? '' : 'gold' }}
                className='button'
            >YoYo
            </button>
        </div>
    )
}

export default Button
