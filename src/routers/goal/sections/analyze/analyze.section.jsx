import React from "react";

import TextArea from "../../../../Components/textarea/textarea.component";

import TitleSection from "../../components/title-section/title-section.component";
import Node from "../../components/node/node.component";
import SlideSwitcher from '../../components/slide-switcher/slide-switcher.component';

import { SectionWrapper } from "../../goal-layout";
import { AnalyzeMain, DotsWrapper, DotsContainer } from './analyze.style';

const AnalyzeSection = () => {
    return(
        <SectionWrapper>
            <TitleSection title='Find your dots:'/>
            <AnalyzeMain>
                <DotsWrapper>
                    <DotsContainer>
                        <SlideSwitcher name='S' after/>
                        <SlideSwitcher name='E' before/>
                    </DotsContainer>
                    <DotsContainer>
                        <TextArea type='big' />
                        <TextArea type='big'/>
                    </DotsContainer>
                </DotsWrapper>
                <Node />
            </AnalyzeMain>
        </SectionWrapper>
    )
};

export default AnalyzeSection;