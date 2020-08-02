import React from 'react';
import { SecureLocationDiv } from './SecureLocationStyles';
import BigTitle from '../../CTA/Titles/BigTitle/BigTitle';
import Paragraph from '../../CTA/Paragraphs/Paragraph';
import Input from '../../CTA/Inputs/Input';
import Button from '../../CTA/Buttons/Button'

const SecureLocation = () => {
  return (
    <SecureLocationDiv>
      <BigTitle text="All your files in one secure location, accessible anywhere." />
      <Paragraph fontColor="var(--very-dark-blue)" textAlign="center">
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
      </Paragraph>
      <Input width="100%" placeholder="Enter your email..." shadow="none" backgroundColor="transparent"/>
      <Button text="Get Started" width="100%" fontSize="1.2rem"/>
    </SecureLocationDiv>
  );
};

export default SecureLocation;
