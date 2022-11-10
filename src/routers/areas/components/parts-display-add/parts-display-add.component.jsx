import React from "react";

import Input from '../input/input.component';
import TextArea from '../textarea/textarea.component';
import PartsBalls from "../parts-balls/parts-balls.component";
import { PartsDisplayAddContainer, PartsDisplayAddLeft, PartsDisplayAddRight } from './parts-display-style';

const PartsDisplayAdd = () => {
    return (
        <PartsDisplayAddContainer>
            <PartsDisplayAddLeft>
                <Input label="Part's title:" />
                <PartsBalls />
                <TextArea type='big' label="What is it about?" />
                <button>Accept and Add</button>
            </PartsDisplayAddLeft>
            <PartsDisplayAddRight>
                <h2>Existing parts:</h2>
                <div className="bla" />
                <div className="bla" />
                <div className="bla" />
                <div className="bla" />
            </PartsDisplayAddRight>
        </PartsDisplayAddContainer>
    )
}

export default PartsDisplayAdd;