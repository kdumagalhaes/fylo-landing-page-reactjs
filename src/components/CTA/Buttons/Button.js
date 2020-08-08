import React from 'react';
import { ButtonTag } from './ButtonStyles';

const Button = ({ text, width, fontSize, shadow, responsiveWidth, margin }) => {
  return <ButtonTag width={width} margin={margin} fontSize={fontSize} shadow={shadow} responsiveWidth={responsiveWidth}>{text}</ButtonTag>;
};

export default Button;
