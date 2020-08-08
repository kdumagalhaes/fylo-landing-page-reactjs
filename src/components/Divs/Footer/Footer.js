import React from 'react';
import { FooterTag, ContentDiv, LinkList1, LinkList2, SocialLinks } from './FooterStyles';
import Logo from '../../Header/Logo/Logo';
import ContactInfo from './ContactInfo/ContactInfo';
import { Icon } from '@iconify/react';
import socialFacebookCircular from '@iconify/icons-typcn/social-facebook-circular';
import socialTwitterCircular from '@iconify/icons-typcn/social-twitter-circular';
import socialInstagramCircular from '@iconify/icons-typcn/social-instagram-circular';
import LogoWhiteSVG from '../../../assets/logo-white.svg'


const Footer = () => {
  return (
    <FooterTag>
      <ContentDiv>
      <div>
      <Logo margin="0 0 20px 0">
      <a href="/#"><img src={LogoWhiteSVG} alt="fylo description SEO"/></a>
        </Logo>
      <ContactInfo />
      </div>
      <LinkList1>
        <li><a href="/#">About Us</a></li>
        <li><a href="/#">Jobs</a></li>
        <li><a href="/#">Press</a></li>
        <li><a href="/#">Blog</a></li>
      </LinkList1>
      <LinkList2>
        <li><a href="/#">Contact Us</a></li>
        <li><a href="/#">Terms</a></li>
        <li><a href="/#">Privacy</a></li>
      </LinkList2>
      <SocialLinks>
        <li><a href="/#"><Icon icon={socialFacebookCircular} width="30"/></a></li>
        <li><a href="/#"><Icon icon={socialTwitterCircular} width="30" /></a></li>
        <li><a href="/#"><Icon icon={socialInstagramCircular} width="30" /></a></li>
      </SocialLinks>
      </ContentDiv>
    </FooterTag>
  );
};

export default Footer;
