import React from 'react';
import { ButtonTag } from './ButtonStyles';

const Button = ({ text, width, fontSize }) => {
  return <ButtonTag width={width} fontSize={fontSize}>{text}</ButtonTag>;
};

export default Button;
