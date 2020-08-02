import React, { Fragment } from 'react';
import { HeaderTag } from './HeaderStyles';
import Logo from './Logo/Logo';
import TopMenu from './TopMenu/TopMenu';

const Header = () => {
  return (
    <Fragment>
      <HeaderTag>
          <Logo/>
          <TopMenu />
      </HeaderTag>
    </Fragment>
  );
};

export default Header;
