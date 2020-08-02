import React from 'react';
import { TestimonialCardStyle, QuoteIcon, TestimonialParagraph } from './TestimonialCardStyles';

const TestimonialCard = ({ margin }) => {
  return (
    <TestimonialCardStyle margin={margin}>
      <QuoteIcon></QuoteIcon>
      <TestimonialParagraph>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </TestimonialParagraph>
    </TestimonialCardStyle>
  );
};

export default TestimonialCard;
