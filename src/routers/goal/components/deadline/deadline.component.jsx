import React, {forwardRef} from "react";

import { Deadstyle } from './deadline.style';

const Deadline = forwardRef((_, ref) => {
    let afterDate = new Date().toJSON().slice(0, 10);

    return(
        <Deadstyle type='date' min={afterDate} ref={ref}/>
    )
})

export default Deadline;