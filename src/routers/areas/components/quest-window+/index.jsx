import React from "react";

import { useSelector } from "react-redux";
import { selectCreateQuestState } from "../../../../App/slices/create-quest.slice";

import { PlanSectionContainer } from './index.style';
import SlideQuestOne from "./slide-quest-one/slide-quest-one.component";
import SlideQuestTwo from "./slide-quest-two/slide-quest-two.component";
import SlideQuestThree from "./slide-quest-three/slide-quest-three.component";
import Menu from "./menu/menu.component";

const QuestWindow = ({ title }) => {
    const currentQuestState = useSelector(selectCreateQuestState);

    return (
        <PlanSectionContainer open={currentQuestState}>
            <Menu title={title}/>
            <SlideQuestOne />
            <SlideQuestTwo />
            <SlideQuestThree />
        </PlanSectionContainer>
    )
}

export default QuestWindow;