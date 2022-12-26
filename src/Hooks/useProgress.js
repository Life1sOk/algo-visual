import { useEffect} from "react";

export const useTimeDeadline = (created, deadline, setHaveTo) => {
    const reformDeadline = Date.parse(deadline) / 1000;
    const reformCreated = Date.parse(created) / 1000;
    const now = Math.floor(Date.now() / 1000);

    const hundred = reformDeadline - reformCreated;
    const haveTime = reformDeadline - now;

    const sec = 2000 / hundred;
    const have = haveTime * 100 / hundred;

    useEffect(() => {
        // setSec(sec);
        setHaveTo(have);
    }, [])

    console.log(have)

    return {
        perSec: sec,
        // timeTo: have,
    }
}

// 100 - hundred     x - 20
// x = 2000 / hundred
//