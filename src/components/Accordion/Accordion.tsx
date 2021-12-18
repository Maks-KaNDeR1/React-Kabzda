import React, { useState } from "react";

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {
    console.log("Accotdion rendering")

    let [collapsed, setCollapsed] = useState(false)

    const switchCollapsed = () => {
        if (collapsed === false) {
            setCollapsed(true)
        } else {
            setCollapsed(false)
        }
    }

    return <div>
        <AccordionTitle title={props.titleValue} />
        <button
            onClick={() => switchCollapsed()}
        >TOGGLE</button>
        {/* {props.collapsed === false && <AccordionBody />} */}
        {!collapsed && <AccordionBody />}
    </div>

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return (<div>
        <h3>Menu</h3>
        <ul>dfg
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>)
}

export default Accordion