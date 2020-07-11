import React from 'react';
import './KeyframeAnimations.css';



export const RotatingKeyframe = (image) => (
    <div>
        <div>
          <p>Rotating Keyframe</p>
          <img src={ image } className="RotatingKeyframe" alt="image" />
        </div>
    </div>
)