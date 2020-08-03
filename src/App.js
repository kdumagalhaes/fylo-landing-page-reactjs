import React, { Fragment } from 'react';
import GlobalReset from './GlobalReset';
import Header from './components/Header/Header';
import SecureLocation from './components/Divs/SecureLocation/SecureLocation';
import StayProductive from './components/Divs/StayProductive/StayProductive';
import EarlyAccess from './components/Divs/EarlyAccess/EarlyAccess'

function App() {
  return (
    <Fragment>
      <Header />
      <SecureLocation />
      <StayProductive/>
      <EarlyAccess/>
      <GlobalReset />
    </Fragment>
  );
}

export default App;
