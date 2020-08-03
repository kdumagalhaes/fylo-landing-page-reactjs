import React from 'react';
import { ButtonTag } from './ButtonStyles';

const Button = ({ text, width, fontSize, shadow }) => {
  return <ButtonTag width={width} fontSize={fontSize} shadow={shadow}>{text}</ButtonTag>;
};

export default Button;
