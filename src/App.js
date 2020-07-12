import React from 'react';
import { useSpring, config } from 'react-spring';
import './App.css';

import { RotatingKeyframe } from './components/RotatingKeyframe.js';
import FadeInText from './components/FadeInText.js';
import Dashoffset from './components/Dashoffset.js';

import logo from './Icons/logo.svg';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <FadeInText text={"This text fades in"}/>
        <RotatingKeyframe image={logo}/>
        <Dashoffset />
      </div>
    </div>
  );
}

export default App;
