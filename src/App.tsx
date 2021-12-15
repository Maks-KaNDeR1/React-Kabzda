

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from './components/OnOff/OnOff';

function App() {

    // let [switch, setSwitch] = useState(false)

    
    
    return (
        <div>
            <OnOff />
            <OnOff />
            <PageTitle title={"Hello, my friends"}/>
            <Accordion titleValue={"Accordidfon"} collapsed={false}/>
            <PageTitle title={"App components"}/>
            <Accordion titleValue={"GROT"} collapsed={true}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;