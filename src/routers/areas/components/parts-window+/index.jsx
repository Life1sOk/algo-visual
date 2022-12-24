import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectAuthUid } from "../../../../App/slices/auth.slice";
import { selectParts, changeToAddData, addPart, deletePart, selectPartWindowOpen, partWindowOpenHandler} from "../../../../App/slices/areas-slice";

import BlackBoxWindow from "../../../../Components/black-box/black-box.component";
import Input from '../input/input.component';
import TextArea from '../textarea/textarea.component';
import PartsBalls from "./parts-balls/parts-balls.component";
import Line from "./part-line/part-line.component";

import Window from "./index.style";

const PartsWindow = () => {
    const dispatch = useDispatch();
    const allParts = useSelector(selectParts);
    const uid = useSelector(selectAuthUid);
    const partWindowOpen = useSelector(selectPartWindowOpen);

    const newPartTitleRef = useRef(null);
    const newPartDescriptionRef = useRef(null);

    const closeWindowHandler = () => dispatch(partWindowOpenHandler(false));

    const addNewPartHandler = () => {
        // Local
        const newPart = {
            title: newPartTitleRef.current.value,
            description: newPartDescriptionRef.current.value
        }
        dispatch(changeToAddData(newPart));
        dispatch(addPart(uid));

        newPartTitleRef.current.value = '';
        newPartDescriptionRef.current.value = '';
    };

    const deletePartHandler = (index) => dispatch(deletePart({uid, index}));

    return (
        <BlackBoxWindow state={partWindowOpen} handler={closeWindowHandler}>
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
                        allParts?.map((part,index) => <Line key={index} index={index} data={part} deleteHandler={deletePartHandler}/>)
                    }
                </Window.Existing>
            </Window>
        </BlackBoxWindow>
    )
}

export default PartsWindow;