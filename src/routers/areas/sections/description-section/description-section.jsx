import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectDisplaySection, currentStateOpen } from "../../../../App/slices/areas-slice";

import { DescriptionSectionContainer, DescriptionTitleContainer, DescriptionCurrent } from './description-section.style';

import PreviewImg from "../../components/preview-img/preview-img.component";
import DescriptionHealth from "../../components/descriptions/description-health.component";
import DescriptionPeople from "../../components/descriptions/description-people.component";
import DescriptionEnvironment from "../../components/descriptions/description-environment.component";
import DescriptionGrowth from "../../components/descriptions/description-growth.component";

const DescriptionSection = () => {
    const dispatch = useDispatch();
    const currentSection = useSelector(selectDisplaySection);
    const { title, previewImg, stateOpen } = currentSection;

    const currentStateChangeHandler = () => {
        dispatch(currentStateOpen());
    }

    return (
        <DescriptionSectionContainer open={stateOpen} onClick={currentStateChangeHandler}>
            <DescriptionTitleContainer>{title}</DescriptionTitleContainer>
            <DescriptionCurrent>
                <PreviewImg image={previewImg} title={title} />
                {
                    title === 'Health' ? <DescriptionHealth /> :
                        title === 'People' ? <DescriptionPeople /> :
                            title === 'Environment' ? <DescriptionEnvironment /> :
                                title === 'Growth' ? <DescriptionGrowth /> :
                                    null
                }
            </DescriptionCurrent>
        </DescriptionSectionContainer>
    )
}

export default DescriptionSection;