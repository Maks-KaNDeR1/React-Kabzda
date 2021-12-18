import React, { useState } from 'react'

function OnOff() {

    let [on, setOn] = useState(false)
    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '20px',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '25px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '10px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle}
                onClick={() => setOn(true)}
            >On</div>
            <div style={offStyle}
                onClick={() => setOn(false)}
            >Of</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff
