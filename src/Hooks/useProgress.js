import { useState, useEffect, useMemo } from "react";

export const useTimeDeadline = (created, deadline) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [perSec, setPerSec] = useState(0);

    const reformDeadline = Date.parse(deadline) / 1000;
    const reformCreated = Date.parse(created) / 1000;
    const now = Math.floor(Date.now() / 1000);

    const hundred = reformDeadline - reformCreated;
    const haveTime = reformDeadline - now;

    const day = useMemo(() => Math.round(8640000 / hundred), [hundred]);
    const time = useMemo(() => Math.round(haveTime * 100 / hundred), [haveTime, hundred])

    useEffect(() => {
        setPerSec(day);
        setCurrentTime(time);
    }, [day, time])

    return {
        currentTime,
        perSec
    }
}