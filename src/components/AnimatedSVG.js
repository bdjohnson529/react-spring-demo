import React from 'react';
import {useSpring, animated} from 'react-spring';

function AnimatedSVG() {

  const props = useSpring({ x: 100, from: { x: 0 } });

  return (

    <div>
      <animated.svg
        width="50%"
        height="50%"
        viewBox="0 0 1728 1728"
        strokeDashoffset={props.x}>
          <path d="M1046.4 259.2c-.23 57.6-47.73 134.4-76.53 163.2-28.802 28.8-77.07 28.8-115.47 28.8-38.4 0-86.67 0-115.47-28.8-28.8-28.8-76.32-105.6-76.53-163.2-.27-67.2 117.196-76.8 192-76.8 74.803 0 192.27 9.6 192 76.8zM756.864 497.51l-67.22 764.583c-5.126 58.368 14.208 116.237 53.414 159.782l111.36 123.725 115.834-121.938c42.278-44.486 63.09-105.178 57.062-166.253L952.146 497.3c-1-9.81-9.274-17.3-19.143-17.3H775.987c-9.946 0-18.258 7.604-19.123 17.51z" />
      </animated.svg>
    </div>
  );
}


export default AnimatedSVG;
