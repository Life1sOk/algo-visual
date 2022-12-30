import React from "react";

import { ProgressBarContainer, ProgressCount, ProgressBarTitle } from './progress-bar.style';

const ProgressBar = ({achieve, action}) => {
    let total = achieve?.length;
    let done = 0;

    for(let i=0; i < total; i++) {
        if(achieve[i]?.status === true) done += 1;
    };
    
    let progress = done * 100 / total;

    return(
        <>
            {
                progress === 100 ?
                <button onClick={action}>Done</button> :
                <ProgressBarContainer>
                    <ProgressBarTitle>Progress bar:</ProgressBarTitle>
                    <ProgressCount progress={progress} />
                </ProgressBarContainer>
            }
        </>
    )
}

export default ProgressBar;