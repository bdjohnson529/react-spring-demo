import React from 'react';
import {useSpring, animated} from 'react-spring';
import './KeyframeAnimations.css';


export const AnimatedText = (props) => (
  <div>
    <animated.div style={props.style} >
      <nav>
        {props.text}
      </nav>
    </animated.div>
  </div>
)


export const TracedSVG = (props) => (
  <div>
    <p>Traced SVG</p>

      <animated.svg width='100%' height='100%'>
        <path d={props.image}
          height="100%"
          width="100%"/>
      </animated.svg>

  </div>
);





export const RotatingImage = (props) => (
  <img src={props.image} className="RotatingKeyframe"/>
);