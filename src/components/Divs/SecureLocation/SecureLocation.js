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
      <Paragraph fontColor="var(--very-dark-blue)" textAlign="center" marginTop="30px">
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
      </Paragraph>
      <Input maxWidth="100%" placeholder="Enter your email..." shadow="none" backgroundColor="transparent" margin="30px 0 0 0"/>
      <Button text="Get Started" width="100%" fontSize="1.2rem" shadow="0px 10px 14px -5px rgba(204, 204, 204, 1)"/>
    </SecureLocationDiv>
  );
};

export default SecureLocation;
