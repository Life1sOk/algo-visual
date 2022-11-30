import React, { useRef, useEffect } from "react";

import { setAreasParts } from "../../../../utils/firebase/firebase";

import { useDispatch, useSelector } from "react-redux";
import { selectAuthUid } from "../../../../App/slices/auth.slice";
import { selectAllParts, selectCircle, selectDisplaySectionTitle, selectPartStatus, changeToAddData, addPart, changePartStatusToReload, deletePart } from "../../../../App/slices/areas-slice";

import Input from '../input/input.component';
import TextArea from '../textarea/textarea.component';
import PartsBalls from "./parts-balls/parts-balls.component";
import Line from "./part-line/part-line.component";

import Window from "./index.style";

const PartsWindow = () => {
    const dispatch = useDispatch();
    const allParts = useSelector(selectAllParts);
    const areasCircleData = useSelector(selectCircle);
    const uid = useSelector(selectAuthUid);
    const currentAreaTitle = useSelector(selectDisplaySectionTitle);
    const partStatus = useSelector(selectPartStatus);

    const newPartTitleRef = useRef(null);
    const newPartDescriptionRef = useRef(null);

    const addNewPartHandler = () => {
        // Local
        const newPart = {
            title: newPartTitleRef.current.value,
            description: newPartDescriptionRef.current.value
        }
        dispatch(changeToAddData(newPart));
        dispatch(addPart(currentAreaTitle));
        dispatch(changePartStatusToReload('reload'));

        newPartTitleRef.current.value = '';
        newPartDescriptionRef.current.value = '';
    };

    const deletePartHandler = (index) => {
        const payload = {
            area: currentAreaTitle,
            index
        }
        dispatch(deletePart(payload));
        dispatch(changePartStatusToReload('reload'));
    };

    useEffect(() => {
        if (partStatus === 'reload') {
            const dataToAdd = {
                allParts,
                circle: areasCircleData
            };
            setAreasParts(uid, currentAreaTitle.toLowerCase(), dataToAdd);
            dispatch(changePartStatusToReload(null));
        }
    }, [partStatus]);

    return (
        <Window>
            <Window.Add>
                <Window.Title>Add new:</Window.Title>
                <Input label="Part's title:" ref={newPartTitleRef} />
                <PartsBalls />
                <TextArea type='big' label="What is it about?" ref={newPartDescriptionRef} />
                <button onClick={addNewPartHandler}>Accept and Add</button>               
            </Window.Add>
            <Window.Existing>
                <Window.Title>Parts:</Window.Title>
                {
                    allParts.map((part,index) => <Line key={index} index={index} data={part} deleteHandler={deletePartHandler}/>)
                }
            </Window.Existing>
        </Window>
    )
}

export default PartsWindow;