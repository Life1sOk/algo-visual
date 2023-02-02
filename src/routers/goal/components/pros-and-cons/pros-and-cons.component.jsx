import React, { useRef, useEffect } from "react";

import { ProsAndConsContainer, ProsMark, InputLine } from './pros-and-cons.style';

const ProsAndCons = ({type, actionHandler}) => {

    const typeRef = useRef(null);

    const sendNewOne = () => {
        let newOne = {
            type,
            message: typeRef.current.value,
        };

        if(typeRef.current.value.length < 1) return alert('Can not add blank');
        actionHandler(newOne);
        typeRef.current.value = '';
    };

    useEffect(() => {
        typeRef.current.value = '';
    }, [type])

    return(
        <ProsAndConsContainer>
            {type === 'Pros' && <ProsMark type={type}>&#8593;</ProsMark>}
            {type === 'Cons' && <ProsMark type={type}>&#8595;</ProsMark>}
            {type === 'Tools' && <ProsMark type={type}>T</ProsMark>}
            <InputLine type={type} ref={typeRef}/>
            <button onClick={sendNewOne}>Add</button>
        </ProsAndConsContainer>
    )
};

export default ProsAndCons;