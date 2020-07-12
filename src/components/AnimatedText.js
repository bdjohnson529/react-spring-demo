import React from 'react';
import {useSpring, animated, config} from 'react-spring';



function AnimatedText(props) {
  
  const fadeInAnimation = useSpring({
   from: { opacity: 0, color:"red", number:0},
   to: { opacity: 1, color:"blue", number:1},
   config: config.molasses
  });

  return (
    <div>
      <animated.div style={fadeInAnimation} >
        <nav>
          {props.text}
        </nav>
      </animated.div>
    </div>
  );

}

export default AnimatedText;