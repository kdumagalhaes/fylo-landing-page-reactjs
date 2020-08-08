import React from 'react';
import { EarlyAccessDiv, ContentDiv, RightSideCTA } from './EarlyAccessStyles';
import SmallTitle from '../../CTA/Titles/SmallTitles/SmallTitle';
import Paragraph from '../../CTA/Paragraphs/Paragraph';
import Input from '../../CTA/Inputs/Input';
import Button from '../../CTA/Buttons/Button';

const EarlyAccess = () => {
  return (
    <EarlyAccessDiv>
      <ContentDiv>
        <div>
      <SmallTitle
        text="Get early access today"
        color="var(--light-grayish-blue)"
        fontSize="1.7rem"
        margin="0 0 15px 0"
      />
      <Paragraph
        color="var(--light-grayish-blue)"
        textAlign="letf"
        marginTop="20px"
        padding="var(--safe-area-padding)"
        maxWidth="500px"
      >
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </Paragraph>
      </div>
      <RightSideCTA>
      <Input
        maxWidth="550px"
        placeholder="email@exemple.com"
        margin="0"
        shadow="0 2px 20px rgba(0,0,0,0.10)"
        responsiveWidth="250px"
      />
      <Button
        text="Get Started For Free"
        width="250px"
        margin="15px 0"
        shadow="0 2px 10px rgba(0,0,0,0.15)"
        responsiveWidth="300px"
      />
      </RightSideCTA>
      </ContentDiv>
    </EarlyAccessDiv>
  );
};

export default EarlyAccess;
