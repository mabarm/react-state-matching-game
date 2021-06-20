import React from 'react';
import './Button.css';

const Button = (props) => ( <button onClick={props.startGame}>
    {props.playing?props.reset:props.start}
</button> )

export default Button
