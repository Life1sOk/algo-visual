import React from 'react';

import { useSpring, animated } from '@react-spring/web';

const PointSpringWrapper = ({children}) => {
    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
    }));

    const handleClick = () => {
        api.start({
          from: {
            x: 0,
          },
          to: {
            x: 100,
          },
        })
    }

    return(
        <animated.div onClick={handleClick} style={{width: '100%', ...springs}}>{children}</animated.div>
    )
};

export default PointSpringWrapper;