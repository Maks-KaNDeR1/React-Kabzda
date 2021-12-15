import './OnOff.css'
import React, { useState } from 'react';

// type SwitchOnPropsType = {
//     handleOffClick: Function
//     handleOnClick: Function
// }

// type SwitchOffPropsType = {
//     handleOffClick: Function
//     handleOnClick: Function

// }

// const SwitchOn = (props: SwitchOnPropsType) => {
//     return (
//         <div className='onOf'>
//             <div>
//                 <button
//                     onClick={() => props.handleOnClick()}
//                     className='button'
//                     style={{ backgroundColor: 'rgb(48, 255, 29)' }}
//                 >
//                     <h1>on</h1>
//                 </button>
//                 <button
//                     onClick={() => props.handleOnClick()}
//                     className='button'
//                     style={{ backgroundColor: 'rgb(255, 33, 33)' }}
//                 >
//                     <h1>off</h1>
//                 </button>
//             </div>
//             <div className='roundOn'></div>
//         </div>)
// }

// const SwitchOff = (props: SwitchOffPropsType) => {
//     return (
//         <div className='onOf'>
//             <div>
//                 <button
//                     onClick={() => props.handleOnClick()}
//                     className='button'
//                     style={{ backgroundColor: 'rgb(48, 255, 29)' }}
//                 >
//                     <h1>on</h1>
//                 </button>
//                 <button
//                     onClick={() => props.handleOffClick()}
//                     className='button'
//                     style={{ backgroundColor: 'rgb(255, 33, 33)' }}
//                 >
//                     <h1>off</h1>
//                 </button>
//             </div>
//             <div className='roundOff'></div>
//         </div>
//     )
// }

function OnOff() {

    const [switchOnOff, setSwitchOnOff] = useState(false)

    let handleOffClick = () => {
        setSwitchOnOff(false)
    }

    let handleOnClick = () => {
        setSwitchOnOff(true)
    }

    return (
        <div className='onOf'>
            <div>
                <button
                    onClick={() => handleOnClick()}
                    className='button'
                    style={{ backgroundColor: switchOnOff ? 'rgb(48, 255, 29)' : '' }}
                >
                    <h1>on</h1>
                </button>
                <button
                    onClick={() => handleOffClick()}
                    className='button'
                    style={{ backgroundColor: switchOnOff ? '' : 'rgb(255, 33, 33)' }}
                >
                    <h1>off</h1>
                </button>
            </div>
            <div className='roundOff'></div>
        </div>
    )
}

export default OnOff


