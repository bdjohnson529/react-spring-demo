import React from 'react';
import {useSpring, animated} from 'react-spring';
import './RotatingKeyframe.css';


export const RotatingKeyframe = (props) => (
    <img src={props.image} className="RotatingKeyframe"/>
)
