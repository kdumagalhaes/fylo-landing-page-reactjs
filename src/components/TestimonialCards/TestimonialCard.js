import React from 'react';
import { TestimonialCardStyle, QuoteIcon, TestimonialParagraph } from './TestimonialCardStyles';
import TestimonialProfile from './TestimonialProfiles/TestimonialProfile'

const TestimonialCard = ({ margin, imageUrl, name, role }) => {
  return (
    <TestimonialCardStyle margin={margin}>
      <QuoteIcon></QuoteIcon>
      <TestimonialParagraph>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </TestimonialParagraph>
      <TestimonialProfile imageUrl={imageUrl} name={name} role={role}/>
    </TestimonialCardStyle>
  );
};

export default TestimonialCard;
