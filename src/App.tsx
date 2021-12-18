import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import Switch from './components/Switch/Switch';
import Button from './components/Button/Button';
import Counter from './components/Сounter/Сounter'
import OnOff from './components/OnOff/OnOff';

function App() {
    return (
        <div>
            <OnOff />
            <OnOff />
            <OnOff />
            <Counter />
            <Button />
            <Switch />
            <PageTitle title={"Hello, my friends"} />
            <Accordion titleValue={"Accordidfon"} />
            <PageTitle title={"App components"} />
            <Accordion titleValue={"GROT"} />
            <Rating />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
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