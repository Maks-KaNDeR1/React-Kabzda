import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./Rating";
import Accordion from "./Accordion";

function App() {
    return (
        <div>
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
