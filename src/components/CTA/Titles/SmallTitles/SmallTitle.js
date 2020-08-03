import React from 'react';
import { SmallTitleTag } from './SmallTitleStyle';
const SmallTitle = ({ text, color, fontSize, padding }) => {
  return <SmallTitleTag text={text} color={color} fontSize={fontSize} padding={padding}>{text}</SmallTitleTag>;
};

export default SmallTitle;
