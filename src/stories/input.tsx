import React, { ChangeEvent, useRef, useState } from 'react'


const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return <><input value={value} onChange={onChange} /> - {value}</>

}

const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange} />
}

const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue} onChange={onChange} />
}

const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1')

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'} >Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Krasnodar</option>
    </select>
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