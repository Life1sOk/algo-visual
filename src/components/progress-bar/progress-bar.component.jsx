import React, { useState, useEffect } from "react";

import { ProgressBarContainer, ProgressCount, ProgressBarTitle } from './progress-bar.style';

const ProgressBar = ({achieve}) => {
    const [progress, setProgress] = useState(0);

    let total = achieve.length;
    let done = 0;

    for(let i=0; i < total; i++) {
        if(achieve[i].status === true) done += 1;
        // if(achieve[i].status === false) done -= 1;
    };

    useEffect(() => {
        if(total > 0 && done > 0) {
            let check = done * 100 / total;
    
            setProgress(check);
        }
    }, [total, done])

    return(
        <ProgressBarContainer>
            <ProgressBarTitle>Progress bar:</ProgressBarTitle>
            <ProgressCount progress={progress} />
        </ProgressBarContainer>
    )
}

export default ProgressBar;