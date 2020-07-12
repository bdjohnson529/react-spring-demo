import React from 'react';
import {useSpring, animated} from 'react-spring';

import Bulb from '../Icons/Bulb.js';
import Tie from '../Icons/tie.svg';


function SVG() {


  console.log(Bulb);
  console.log(Tie);

  return (

    <div>
      <img src={Tie} width="25%" height="25%"/>

      <Bulb />


      <svg width="100" height="100">
          <circle cx={50} cy={50} r={10} fill="red" />
      </svg>
    </div>
  );
}


export default SVG;
