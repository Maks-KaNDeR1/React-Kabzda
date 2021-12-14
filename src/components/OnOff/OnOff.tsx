import React from 'react'
import './OnOff.css'

type swithPropsType = {
    switch: boolean
}

const SwitchOn = () => {
    return (
        <div className='onOf'>
        <div>
            <button className='button'
                style={{ backgroundColor: 'rgb(48, 255, 29)' }}>
                <h1>on</h1></button>
            <button className='button'>
                <h1>off</h1></button>
        </div>
        <div className='roundOn'></div>
    </div>)
}
const SwitchOff = () => {
    return (
        <div className='onOf'>
        <div>
            <button className='button'>
                <h1>on</h1></button>
            <button className='button'
                style={{ backgroundColor: 'rgb(255, 33, 33)' }}>
                <h1>off</h1></button>
        </div>
        <div className='roundOff'></div>
    </div>)
}

function OnOff(props: swithPropsType) {
    if (props.switch === true) {
        return <SwitchOn />
    } else {
        return <SwitchOff />
    }
}


export default OnOff
