import React, { useState } from "react";

import ButtonSd from "../../../../Components/button-sd/button-sd.component";

import ProsAndCons from "../pros-and-cons/pros-and-cons.component";
import ButtonFt from "../button-ft/button-ft.component";
import PathLine from "../path-line/path-line.component";

import { PathWrapper, PathContainer, PathDescription, PathDescriptionWrapper, PathNumber, ProsAndConsWrapper, PathButtonsFront, PathButtonsFooter, ProsConsToolsContainer } from './path.style';

const types = [
    { color: 'rgb(0,255,0)', title: 'Pros' },
    { color: 'rgb(255,0,0)', title: 'Cons' },
    { color: 'rgb(255,255,0)', title: 'Tools' },
];

const Path = ({data }) => {
    const [ typeLine, setTypeLine ] = useState(null);
    const [ pros, setPros ] = useState([]);
    const [ cons, setCons ] = useState([]);
    const [ tools, setTools ] = useState([]);
    // const { status} = data;

    const typeLineHandler = (type) => setTypeLine(type);

    const addProsAndCons = (newOne) => {
        if(newOne.type === 'Pros') setPros([...pros, newOne]);
        if(newOne.type === 'Cons') setCons([...cons, newOne]);
        if(newOne.type === 'Tools') setTools([...tools, newOne]);
    }

    return(
        <PathWrapper>
            <PathContainer>
                <PathButtonsFront>
                    <ButtonSd type='replace' scale='8'/>
                    <ButtonSd type='delete' color='rgb(255,98,0)' background='inherit' scale='8'/>
                </PathButtonsFront>
                <PathNumber>Path 1</PathNumber>
                <PathDescription>
                    <PathDescriptionWrapper>description</PathDescriptionWrapper>
                </PathDescription>
                <PathButtonsFooter>
                    {
                        types.map((but, index) => 
                            <ButtonFt key={index} name={but.title} color={but.color} title={but.title}
                                onClick={() => typeLineHandler(but.title)}
                            />)
                    }
                </PathButtonsFooter>
            </PathContainer>
            <ProsConsToolsContainer>
                {
                    types.map((type, index) => (
                        <ProsAndConsWrapper key={index}>
                            {
                                type.title === 'Pros' ? pros?.map((line, index) => <PathLine key={index} data={line}/>) : 
                                type.title === 'Cons' ? cons?.map((line, index) => <PathLine key={index} data={line}/>) : 
                                type.title === 'Tools' ? tools?.map((line, index) => <PathLine key={index} data={line}/>) : 
                                null
                            }
                        </ProsAndConsWrapper>
                    ))
                }
            </ProsConsToolsContainer>
            { typeLine !== null && <ProsAndCons type={typeLine} actionHandler={addProsAndCons} /> }
        </PathWrapper>
    )
};

export default Path;