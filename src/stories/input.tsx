import React, { ChangeEvent, useRef, useState } from 'react'

function input() {
    return (
        <div>

        </div>
    )
}

export default input


const trackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return <><input value={value} onChange={onChange} /> - {value}</>

}

const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value);
    }

    return <><input ref={inputRef} /><button onClick={save} >save</button> - actual value {value}  </>
}