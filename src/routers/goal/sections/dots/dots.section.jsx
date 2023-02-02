import React from "react";

import TextArea from "../../../../Components/textarea/textarea.component";

import TitleSection from "../../components/title-section/title-section.component";
import Node from "../../components/node/node.component";
import SlideSwitcher from '../../components/slide-switcher/slide-switcher.component';

import { SectionWrapper, GridTwoWrapper } from "../../goal-layout";
import { DotsWrapper } from './dots.style';

const DotsSection = () => {
    return(
        <SectionWrapper>
            <TitleSection title='Find your dots:'/>
            <GridTwoWrapper>
                <DotsWrapper>
                    {/* <GridTwoWrapper>
                        <SlideSwitcher name='S' after/>
                        <SlideSwitcher name='E' before/>
                    </GridTwoWrapper> */}
                    <GridTwoWrapper>
                        <TextArea type='big' label='Resources u have:'/>
                        <TextArea type='big' label='Tools u need:'/>
                    </GridTwoWrapper>
                </DotsWrapper>
                <Node />
            </GridTwoWrapper>
        </SectionWrapper>
    )
};

export default DotsSection;