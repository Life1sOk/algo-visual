import React from 'react';
import { useState, useEffect } from 'react';

import { TimerContainer } from './timer.style';

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  const createdTime = "2022-11-05";
  const deadline = "2022-12-05";
  const today = Date.now();

  const time = Date.parse(deadline) / 1000;
  const created = Date.parse(createdTime) / 1000;
  
  const [days, setDays] = useState(time - created);

  const getTime = () => {

    setDays(days - 1);
    // console.log(Math.floor(today / 1000))
    // setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    // setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    // setMinutes(Math.floor((time / 1000 / 60) % 60));
    // console.log(created)
    // console.log(time, '123')
    // console.log(created, 'qwe')
    // console.log(time - created, 'time')
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, [days]);


  return (
    <TimerContainer>
        <span>{days}</span>
    </TimerContainer>
  );
};

export default Timer;