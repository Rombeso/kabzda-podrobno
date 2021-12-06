import React, {ChangeEvent, useState} from "react";

export const ControlledInput = () => {

let [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <input value={parentValue} onChange={onChange} />
    )
}

export const ControlledCheckbox = () => {
    let [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return (
        <input type='checkbox' checked={parentValue} onChange={onChange} />
    )
}

export const ControlledSelect = () => {
    let [parentValue, setParentValue] = useState<string|undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChange}>
            <option>None</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )
}