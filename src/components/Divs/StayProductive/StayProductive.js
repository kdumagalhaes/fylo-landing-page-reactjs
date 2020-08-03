import React from 'react';
import { StayProductiveDiv } from './StayProductiveStyles';
import SmallTitle from '../../CTA/Titles/SmallTitles/SmallTitle';
import Paragraph from '../../CTA/Paragraphs/Paragraph';
import InfoLink from '../../CTA/InfoLinks/InfoLink'
import ArrowIcon from '../../../assets/icon-arrow.svg'
import TestimonialCard from '../../TestimonialCards/TestimonialCard'
import TestimonialAvatar from '../../../assets/avatar-testimonial.jpg'

const StayProductive = () => {
  return (
    <StayProductiveDiv>
      <SmallTitle
        text="Stay productive, wherever you are"
        color="var(--very-dark-blue)"
        padding="320px"
      />
      <Paragraph color="var(--desaturated-blue)" marginTop="30px" padding="var(--safe-area-padding)">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs
      </Paragraph>
      <Paragraph color="var(--desaturated-blue)" marginTop="20px" padding="var(--safe-area-padding)">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required!
      </Paragraph>
      <InfoLink url="/#" margin="30px auto 0">See how Fylo works <img src={ArrowIcon} alt="arrow icon"/></InfoLink>
      <TestimonialCard margin="50px auto 0" imageUrl={TestimonialAvatar} name="Kyle Burton" role="Founder and CEO, Huddle"/>
    </StayProductiveDiv>
  );
};

export default StayProductive;
