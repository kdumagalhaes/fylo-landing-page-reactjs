import React from 'react';
import { FooterTag } from './FooterStyles';
import Logo from '../../Header/Logo/Logo';
import ContactInfo from './ContactInfo/ContactInfo';

const Footer = () => {
  return (
    <FooterTag>
      <Logo margin="0 0 20px 0" />
      <ContactInfo />
    </FooterTag>
  );
};

export default Footer;
