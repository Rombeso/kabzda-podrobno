import React, {KeyboardEventHandler,KeyboardEvent, useEffect, useState} from "react";
import s from './Select.module.css';


type  ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoverElement, setHoverElement] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const selectedElement = props.items.find(i => i.value === hoverElement)

    useEffect(() => {
        setHoverElement(props.value)
    }, [props.value])

    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log('Press')
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoverElement) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }
    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
            <div className={s.items}>
                {props.items.map(i => {
                    return (
                        <div key={i.value}
                             onMouseEnter={() => {
                                 setHoverElement(i.value)
                             }}
                             onClick={() => {
                                 onItemClick(i.value)
                             }}
                             className={selectedElement === i ? s.selected : ""}
                        >{i.title}</div>
                    )
                })}
            </div>}
        </div>
    )

}