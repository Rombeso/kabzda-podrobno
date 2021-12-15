import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion"
import {Rating, RatingValueType} from "./components/Raitin/Raiting";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {OnOff} from "./components/Buttons/OnOff";
import {UncontrolledOnOff} from './components/Buttons/Buttons';
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/Input/Input";
import {Select} from "./components/Select/Select";

function App(props: any) {

    let items = [
        {title: 'Dima', value: 1},
        {title: 'Pasha', value: 2},
        {title: 'Sasha', value: 3}
    ]
const [value, setValue] = useState(2)

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false)
    return (
        <div className='App'>
            {/*<Select value={value} onChange={setValue} items={items} />*/}
           {/*<ControlledInput />*/}
            {/*<ControlledCheckbox />*/}
            {/*<ControlledSelect />*/}
            {/*<PageTitle title={'This is App component'}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={setAccordionCollapsed} value={accordionCollapsed}*/}
            {/*items={items}*/}
            {/*           onClick={(title) => {console.log(`Hello mc. ${title} you!`)}}*/}
            {/*/>*/}
            {/*<Accordion titleValue={'Users'}/>*/}
            {/*  <Rating />*/}
            {/*  <OnOff/>*/}
            {/*<UncontrolledOnOff onChange={setOn}/> {on.toString()}*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            {/*<OnOff setOnOff={setOn} on={on}/>*/}
        </div>
    );
}

type PageTitelPropsType = {
    title: string
}

function PageTitle(props: PageTitelPropsType) {
    console.log('PageTitle rendering')

    return <h1>{props.title}</h1>
}

export default App;
