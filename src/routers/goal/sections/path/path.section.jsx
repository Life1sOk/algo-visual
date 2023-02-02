import React, { useRef, useState } from "react";

import TextArea from "../../../../Components/textarea/textarea.component";

import Path from "../../components/path/path.component";
import TitleSection from "../../components/title-section/title-section.component";
import Node from "../../components/node/node.component";

import { SectionWrapper } from "../../goal-layout";
import { PathMain, PathForm, WindowsWrapper, WindowPaths, WindowActivePath } from './path.style';

const PathSection = () => {
    const [check, setCheck] = useState([]);

    const checkRef = useRef(null);

    const checkHandler = () => {
        let checkObject = {
            id: check.length,
            statis: false,
            description: checkRef.current.value,
            pros: [],
            cons: [],
            tools: [],
        };

        setCheck([...check, checkObject]);
        checkRef.current.value = '';
    };

    return(
        <SectionWrapper>
            <TitleSection title='Ways:'/>
            <PathMain>
                <PathForm>
                    <TextArea type='normal' label='New path:' ref={checkRef}/>
                    <button onClick={checkHandler}>Add</button>
                </PathForm>
                <Node />
            </PathMain>
            <WindowsWrapper>
                <WindowActivePath>
                    <Path data={check[0]} key={0}/>
                </WindowActivePath>
                <WindowPaths>
                    {
                        check?.map((t, index )=> index !== 0 && <Path key={index} data={t}/>)
                    }
                </WindowPaths>
            </WindowsWrapper>
        </SectionWrapper>
    )
};

export default PathSection;