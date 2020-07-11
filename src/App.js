import React from 'react';
import { useSpring } from 'react-spring';

import { RotatingKeyframe } from './components/KeyframeAnimations.js';
import { TracedSVG, AnimatedText, StaticImage }  from './components/SpringComponents.js';

import image from './img/logo.svg';
import './App.css';


function App() {
  const textAnimation = useSpring({
     from: { opacity: 0, color:"red", number:0},
     to: { opacity: 1, color:"blue", number:1}
   });

  return (
    <div className="App">


      <div className="App-header">
      
        <AnimatedText style={textAnimation} />

        <img src={ image } width="25%" height="25%"/>

        <StaticImage image={ image } />

      </div>


      <div>
        <p>Page 2</p>
      </div>

    </div>
  );
}

export default App;
