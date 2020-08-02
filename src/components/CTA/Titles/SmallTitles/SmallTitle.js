import React from 'react';
import { SmallTitleTag } from './SmallTitleStyle';
const SmallTitle = ({ text, color, fontSize }) => {
  return <SmallTitleTag text={text} color={color} fontSize={fontSize}>{text}</SmallTitleTag>;
};

export default SmallTitle;
