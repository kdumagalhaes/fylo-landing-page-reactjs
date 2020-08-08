import React from 'react';
import { ButtonTag } from './ButtonStyles';

const Button = ({ text, width, fontSize, shadow, responsiveWidth }) => {
  return <ButtonTag width={width} fontSize={fontSize} shadow={shadow} responsiveWidth={responsiveWidth}>{text}</ButtonTag>;
};

export default Button;
