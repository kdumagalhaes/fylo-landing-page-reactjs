import React, { Fragment } from 'react';
import { HeaderTag } from './HeaderStyles';
import Logo from './Logo/Logo';
import TopMenu from './TopMenu/TopMenu';
import LogoSVG from '../../assets/logo.svg'

const Header = () => {
  return (
    <Fragment>
      <HeaderTag>
          <Logo>
          <a href="/#"><img src={LogoSVG} alt="fylo description SEO"/></a>
          </Logo>
          <TopMenu />
      </HeaderTag>
    </Fragment>
  );
};

export default Header;
