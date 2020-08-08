import React from 'react';
import { SmallTitleTag } from './SmallTitleStyle';
const SmallTitle = ({ text, color, fontSize, padding, margin, responsiveFontSize }) => {
  return (
    <SmallTitleTag
      text={text}
      color={color}
      fontSize={fontSize}
      padding={padding}
      margin={margin}
      responsiveFontSize={responsiveFontSize}
    >
      {text}
    </SmallTitleTag>
  );
};

export default SmallTitle;
