import React from 'react';
import { ContactInfoItemTag } from './ContactInfoItemStyles';

const ContactInfoItem = ({ iconUrl, alt, text }) => {
  return (
    <ContactInfoItemTag>
      <img src={iconUrl} alt={alt} />
      <span>{text}</span>
    </ContactInfoItemTag>
  );
};

export default ContactInfoItem;
