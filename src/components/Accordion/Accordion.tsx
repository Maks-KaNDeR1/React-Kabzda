import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accotdion rendering")
    return <div>
        <AccordionTitle title={props.titleValue} />
        {/* {props.collapsed === false && <AccordionBody />} */}
        {!props.collapsed && <AccordionBody />}
    </div>

    // function Accordion(props: AccordionPropsType) {
    //     console.log("Accotdion rendering")
    //     if (props.collapsed === true) {
    //         return <div>
    //             <AccordionTitle title={props.titleValue}/>
    //             <AccordionBody/>
    //         </div>
    //     } else {
    //         return <div>
    //             <AccordionTitle title={props.titleValue}/>
    //         </div>
    //     }

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