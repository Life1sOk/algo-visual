import React from 'react';
import { useState, useEffect } from 'react';

import { useTimeDeadline } from '../../Hooks/useProgress';
import { Progress } from './timer.style';

const Timer = ({deadline, createdTime, setTime}) => {
    // const createdTime = "2022-11-05";
    // const deadline = "2022-12-05";

    const [haveTo, setHaveTo] = useState(0);
    const [perSec, setPerSec] = useState(0);

    useTimeDeadline(createdTime, deadline, setPerSec, setHaveTo);

    useEffect(() => {
      const interval = setInterval(() => setHaveTo(haveTo - perSec), 20000);
      setTime(haveTo);
      return () => clearInterval(interval);
    }, [haveTo]);

    return (
      <Progress time={haveTo}/>
    );
};

export default Timer;