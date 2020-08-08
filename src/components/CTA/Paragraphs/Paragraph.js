import React from 'react';
import { ParagraphTag } from './ParagraphsStyles';

const Paragraph = ({
  children,
  color,
  textAlign,
  margin,
  padding,
  marginResponsive,
  maxWidth,
  responsiveTextAlign,
}) => {
  return (
    <ParagraphTag
      color={color}
      textAlign={textAlign}
      margin={margin}
      marginResponsive={marginResponsive}
      padding={padding}
      maxWidth={maxWidth}
      responsiveTextAlign={responsiveTextAlign}
    >
      {children}
    </ParagraphTag>
  );
};

export default Paragraph;
