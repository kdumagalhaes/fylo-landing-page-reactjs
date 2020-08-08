import React, {Fragment} from 'react';
import { StayProductiveDiv, BgCurveSpan, ContentDiv } from './StayProductiveStyles';
import Paragraph from '../../CTA/Paragraphs/Paragraph';
import InfoLink from '../../CTA/InfoLinks/InfoLink'
import ArrowIcon from '../../../assets/icon-arrow.svg'
import TestimonialCard from '../../TestimonialCards/TestimonialCard'
import TestimonialAvatar from '../../../assets/avatar-testimonial.jpg'
import SmallTitle from '../../CTA/Titles/SmallTitles/SmallTitle'

const StayProductive = () => {
  return (
    <Fragment>
      <BgCurveSpan></BgCurveSpan>
    <StayProductiveDiv>
      <ContentDiv>
      <SmallTitle
        text="Stay productive, wherever you are"
        padding="300px"
        margin="0 0 20px 0"
        fontSize="2.3rem"
      />
      <Paragraph color="var(--desaturated-blue)" marginResponsive="30px 0 0 0">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs
      </Paragraph>
      <Paragraph color="var(--desaturated-blue)" margin="15px 0" marginResponsive="15px 0 20px 0">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required!
      </Paragraph>
      <InfoLink url="/#" margin="0 0 30px">See how Fylo works <img src={ArrowIcon} alt="arrow icon"/></InfoLink>
      <TestimonialCard margin="50px auto 0" imageUrl={TestimonialAvatar} name="Kyle Burton" role="Founder and CEO, Huddle"/>
      </ContentDiv>
    </StayProductiveDiv>
    </Fragment>
  );
};

export default StayProductive;
