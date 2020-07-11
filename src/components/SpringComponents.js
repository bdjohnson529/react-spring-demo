import React from 'react';
import {useSpring, animated} from 'react-spring';


export const AnimatedText = ({ style }) => (
  <div>
    <animated.div style={style} >
      <nav>
        The CSS style of this text is animated.
      </nav>
    </animated.div>
  </div>
)


export const TracedSVG = () => (
  <div>
    <p>Traced SVG</p>

      <svg>
        <animated.svg>
          <path d="../img/logo.svg" />
        </animated.svg>
      </svg>
  </div>
);


export const StaticImage = (image) => (
  <div>
    <img src={ image } />
  </div>
);