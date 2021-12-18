import React, { useState } from 'react'
import styles from './counter.module.css'
function Сounter() {

    let [counter, setCounter] = useState(0)

    const inscrement = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div style={{ padding: '50px' }}>
            <button
                className={styles.button}
                onClick={inscrement}
            > +
            </button>
            <button
                className={styles.button}
                onClick={decrement}
            > -
            </button>
            <span className={styles.count} >{counter}</span>
        </div>
    )
}

export default Сounter
