import React from 'react';
import { useState, useEffect } from 'react';

import { useTimeDeadline } from '../../Hooks/useProgress';
import { TimerContainer, Progress } from './timer.style';

const Timer = () => {
  const createdTime = "2022-11-05";
  const deadline = "2022-12-05";

  const {currentTime, perSec} = useTimeDeadline(createdTime, deadline);
  const [have, setHave] = useState(0);

  useEffect(() => {
    setHave(currentTime);
  }, [])
  
  // useEffect(() => {
  //   const interval = setInterval(() => setHave(), 1000);

  //   return () => clearInterval(interval);
  // }, [days]);

  return (
    <TimerContainer>
      <Progress time={currentTime * 10000000}/>
    </TimerContainer>
  );
};

export default Timer;