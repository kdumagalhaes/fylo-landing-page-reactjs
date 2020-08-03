import React from 'react';
import { EarlyAccessDiv } from './EarlyAccessStyles';
import SmallTitle from '../../CTA/Titles/SmallTitles/SmallTitle';
import Paragraph from '../../CTA/Paragraphs/Paragraph';
import Input from '../../CTA/Inputs/Input';
import Button from '../../CTA/Buttons/Button';

const EarlyAccess = () => {
  return (
    <EarlyAccessDiv>
      <SmallTitle
        text="Get early access today"
        color="var(--light-grayish-blue)"
        fontSize="1.3rem"
      />
      <Paragraph
        color="var(--light-grayish-blue)"
        textAlign="center"
        marginTop="20px"
        padding="var(--safe-area-padding)"
      >
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </Paragraph>
      <Input
        maxWidth="250px"
        placeholder="email@exemple.com"
        margin="30px 0 0 0"
        shadow="0 2px 20px rgba(0,0,0,0.10)"
      />
      <Button text="Get Started For Free" width="250px" shadow="0 2px 10px rgba(0,0,0,0.15)"/>
    </EarlyAccessDiv>
  );
};

export default EarlyAccess;
