import React from 'react';
import { useSpring } from 'react-spring';
import { TracedSVG, AnimatedText, RotatingImage }  from './components/ImageViews.js';

import image from './img/logo.svg';
import './App.css';


function App() {

  const fadeInAnimation = useSpring({
     from: { opacity: 0, color:"red", number:0},
     to: { opacity: 1, color:"blue", number:1}
   });

  const svgSpring = useSpring({
      from: { x: 0, opacity: 0 },
      to: async next => {
        await next({ x: 120, opacity: 1 })
      },
      delay: 3000,
      config: { tension: 20, friction: 10 }
  });

  return (

    <div className="App">
      <div className="App-header">
        <AnimatedText style={fadeInAnimation} text={"This text fades in."}/>
        <RotatingImage hello={"hello"} image={image} />
        <TracedSVG style={svgSpring} image={image} />
      </div>

      <div>
        <p>Page 2</p>
      </div>

    </div>
  );
}

export default App;
