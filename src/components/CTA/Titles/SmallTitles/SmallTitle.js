import React from 'react';
import { SmallTitleTag } from './SmallTitleStyle';
const SmallTitle = ({ text, color, fontSize, padding, margin }) => {
  return <SmallTitleTag text={text} color={color} fontSize={fontSize} padding={padding} margin={margin} >{text}</SmallTitleTag>;
};

export default SmallTitle;
