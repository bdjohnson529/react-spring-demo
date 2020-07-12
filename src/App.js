import React from 'react';
import { useSpring, config } from 'react-spring';
import { RotatingKeyframe } from './components/RotatingKeyframe.js';
import AnimatedText from './components/AnimatedText.js';
import AnimatedSVG  from './components/AnimatedSVG.js';
import StaticSVG  from './components/StaticSVG.js';

import image from './img/logo.svg';
import './App.css';


function App() {

  return (
    <div className="App">
      <div className="App-header">
        <AnimatedText text={"This text fades in."}/>
        <RotatingKeyframe image={image} />
        <StaticSVG />


      </div>

      <div>
        <p>Page 2</p>
      </div>

    </div>
  );
}

export default App;
