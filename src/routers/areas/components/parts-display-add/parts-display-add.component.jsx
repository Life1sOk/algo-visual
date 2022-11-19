import React, { useRef, useEffect } from "react";

import { setAreasParts } from "../../../../utils/firebase/firebase";

import { useDispatch, useSelector } from "react-redux";
import { selectAuthUid } from "../../../../App/slices/auth.slice";
import { selectAllParts, selectCircle, selectDisplaySectionTitle, selectPartStatus, changeToAddData, addPart, changePartStatusToReload, deletePart } from "../../../../App/slices/areas-slice";

import Input from '../input/input.component';
import TextArea from '../textarea/textarea.component';
import PartsBalls from "../parts-balls/parts-balls.component";
import PartsDisplayMainPart from "../parts-display-main-part/parts-display-main-part.component";
import PartTitleBall from "../../../../Components/part-title-ball/part-title-ball.component";

import { PartsDisplayAddContainer, PartsDisplayAddLeft, PartsDisplayAddRight, PartsWrapper } from './parts-display-style';

const PartsDisplayAdd = () => {
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
        <PartsDisplayAddContainer>
            <PartsDisplayAddLeft>
                <Input label="Part's title:" ref={newPartTitleRef} />
                <PartsBalls />
                <TextArea type='big' label="What is it about?" ref={newPartDescriptionRef} />
                <button onClick={addNewPartHandler}>Accept and Add</button>
            </PartsDisplayAddLeft>
            <PartsDisplayAddRight>
                <h2>Existing parts:</h2>
                {/* {
                    allParts.map(part => <PartTitleBall key={allParts.indexOf(part)} index={allParts.indexOf(part)} color={part.color} title={part.title} deleteHandler={deletePartHandler} />)
                } */}
                <PartsWrapper>
                    {
                        allParts?.map(part => <PartsDisplayMainPart key={allParts.indexOf(part)} data={part} />)
                    }
                </PartsWrapper>
            </PartsDisplayAddRight>
        </PartsDisplayAddContainer>
    )
}

export default PartsDisplayAdd;