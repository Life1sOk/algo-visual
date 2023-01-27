import React from "react";

import { CheckboxInput } from './checkbox.style';

const Checkbox = ({status, ...others}) => {
    return(
        <CheckboxInput type='checkbox' checked={status} {...others}/>
    )
};

export default Checkbox;